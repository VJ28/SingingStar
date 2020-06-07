import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToNodeStream } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "../../client/containers/App";

export function ssrTemplate(req, res) {
  res.write(`<!DOCTYPE html>
  <html lang="en">
      <head>
          <title>Singing Competition 2020 in Mumbai- Singing Star</title>
          <meta charset="UTF-8">
          <link rel="shortcut icon" type="image/ico" href="/favicon.ico" />
          <meta name="google-site-verification" content="oqGRhd80lbrdgjieVf1dksSORVekS4g7mEWkqFh3UoE" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="title" content="Singing Competition 2020 - Singing Star"/>
          <meta name="description" content="Singing Star 2020 is a online singing competition to showcase your skills and win a smartphone worth ₹15k. No need to go through the hassle of audition, just record and upload to be part of contest."/>
          <link rel="canonical" href="https://singing-star.herokuapp.com${req.originalUrl}"/>
          <link rel="alternate" hreflang="default"  href="https://singing-star.herokuapp.com${req.originalUrl}"/>
          <link rel="alternate" hreflang="en" href="https://singing-star.herokuapp.com${req.originalUrl}"/>
          <link rel="stylesheet" type="text/css" href="/app.css" defer/>
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
    res.end(`</div>
    <script src="/vendors.js" async></script>
    <script src="/runtime.js" async ></script>
    <script src="/app.js" charset="utf-8" async></script>
    </body>
</html>`)
  );
}
