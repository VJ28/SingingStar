import express from "express";
const router = express.Router();

const ssrTemplate = require("../../helper/renderSSR").ssrTemplate;

router.get("*", async (req, res) => {
  ssrTemplate(req, res);
});

module.exports = router;
