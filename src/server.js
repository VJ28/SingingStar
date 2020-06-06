import express from "express";
import compression from "compression";
import ssr from "./backend/routes/ssr";
import http2 from "../node_modules/http2";
import bodyParser from "body-parser";
import http from "http";
import fs from "fs";
import fileUpload from "express-fileupload";
import path from "path";
import AWS from "aws-sdk";
import dotenv from "dotenv";
dotenv.config();
const app = express();
require("express-http2-workaround")({
  express: express,
  http2: http2,
  app: app,
});
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(fileUpload());
app.use(compression());

app.use(express.static("dist/public"));

// Setup HTTP/1.x Server
var httpServer = http.Server(app);
httpServer.listen(3031, function () {
  console.log("Express HTTP/1 server started");
});

const options = {
  key: fs.readFileSync(
    path.join(__dirname, "certificates", "localhost-privkey.pem")
  ),
  cert: fs.readFileSync(
    path.join(__dirname, "certificates", "localhost-cert.pem")
  ),
  ca: fs.readFileSync(
    path.join(__dirname, "certificates", "localhost-cert.pem")
  ),
  allowHTTP1: true,
};
let server = http2.createServer(options, app);

server.listen(3030, function listenHandler() {
  console.info(`Running on 3030...`);
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
    Bucket: "singingstar-songs",
    Key: fileName,
    Body: Buffer.from(file, "binary"),
    ACL: "public-read",
  };
  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      console.log(err);
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
      docClient.put(params, function (err, data) {
        if (err) {
          console.error(JSON.stringify(err, null, 2));
        } else {
          console.log("PutItem succeeded");
        }
      });
    }
  });
});

app.get("/getAll", async function (req, res) {
  var docClient = new AWS.DynamoDB.DocumentClient();
  let items = await docClient.scan({ TableName: "singingstar" }).promise();
  return res.json(items.Items).end();
});

app.use("/", ssr);
