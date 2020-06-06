import React from "react";
import App from "../client/containers/App";
import { StaticRouter } from "react-router-dom";
import { renderToNodeStream } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

export function ssrTemplate(req, res) {
  res.write(`<!DOCTYPE html>
  <html lang="en">
      <head>
          <title>Singing Competition 2020 - Singing Star</title>
          <meta charset="UTF-8">
          <meta name="google-site-verification" content="oqGRhd80lbrdgjieVf1dksSORVekS4g7mEWkqFh3UoE" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" type="text/css" href="/app.css" async/>
          <meta name="description" content="A platform to showcase your singing skills and win a smartphone
          worth ₹15k."/>
      </head>
      <body><div id="root">`);

  const sheet = new ServerStyleSheet();
  const jsx = sheet.collectStyles(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  const stream = sheet.interleaveWithNodeStream(renderToNodeStream(jsx));

  stream.pipe(res, { end: false });

  // and finalize the response with closing HTML
  stream.on("end", () =>
    res.end(`</div></body>
  <script src="/vendors.js" async></script>
  <script src="/runtime.js" async ></script>
  <script src="/app.js" charset="utf-8" async></script>
</html>`)
  );
}
