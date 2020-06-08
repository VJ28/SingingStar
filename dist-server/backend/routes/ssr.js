"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const ssrTemplate = require("../helper/renderSSR").ssrTemplate;

router.get("*", async (req, res) => {
  if (req.originalUrl.includes("favicon")) {
    res.writeHead(200, {
      "Content-Type": "image/ico"
    });
    res.end();
    return;
  }

  ssrTemplate(req, res);
});
module.exports = router;