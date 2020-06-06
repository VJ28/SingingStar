import express from "express";
import compression from "compression";
import ssr from "./backend/routes/ssr";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import path from "path";
import AWS from "aws-sdk";
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "E:/SingingStar/src/.env" });
}
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(fileUpload());
app.use(compression());

app.use(express.static("dist/public"));

// Setup HTTP/1.x Server
let port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", 511, function () {
  console.log("Express HTTP/1 server started on port: " + port);
});

AWS.config.region = process.env.AWS_REGION; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.IDENTITY_POOL_ID,
});

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_ID,
  accessSecretKey: process.env.AWS_SECRET_KEY,
});

app.post("/upload", (req, res) => {
  let { originalFileName } = req.query;
  let { file, name, contact, email, city } = req.body;
  const fileName = `${name
    .toLowerCase()
    .replace(/ /g, "")}-${contact}${path.extname(originalFileName)}`;
  const params = {
    Bucket: process.env.S3_BUCKET,
    Key: fileName,
    Body: Buffer.from(file, "binary"),
    ACL: "public-read",
  };
  // Uploading files to the bucket
  s3.upload(params, async function (err, data) {
    if (err) {
      console.log(err);
      res.status(500).end("Error Occured while uploading file");
    } else {
      console.log(`File uploaded successfully. ${data.Location} ${name}`);
      var docClient = new AWS.DynamoDB.DocumentClient();
      var params = {
        TableName: "singingstar",
        Item: {
          name: name,
          contact: Number(contact),
          email: email,
          city: city,
          filename: data.Location,
        },
      };
      let result = await docClient.put(params).promise();
      if (result.$response.error) {
        res.status(500).end("Error Occured while saving data");
        console.error(JSON.stringify(err, null, 2));
      } else {
        res.status(200).end();
      }
    }
  });
});

app.get("/getAll", async function (req, res) {
  var docClient = new AWS.DynamoDB.DocumentClient();
  let items = await docClient.scan({ TableName: "singingstar" }).promise();
  return res.json(items.Items).end();
});

app.use("/", ssr);
