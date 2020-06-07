import express from "express";
const router = express.Router();

const ssrTemplate = require("../../helper/renderSSR").ssrTemplate;

router.get("*", async (req, res) => {
  if (req.originalUrl.includes("favicon")) {
    res.writeHead(200, { "Content-Type": "image/ico" });
    res.end();
    return;
  }
  ssrTemplate(req, res);
});

module.exports = router;
