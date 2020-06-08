import React from "react";
import { StaticRouter } from "react-router-dom";
import { renderToNodeStream } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import App from "../../client/containers/App";

export function ssrTemplate(req, res) {
  res.write(`<!DOCTYPE html>
  <html lang="en">
      <head>
          <title>Online Singing Competition 2020 in Mumbai- Singing Star</title>
          <meta charset="UTF-8">
          <link type="image/ico" rel="shortcut icon" href="${req.protocol}://${req.headers.host}/favicon.ico">
          <meta name="google-site-verification" content="oqGRhd80lbrdgjieVf1dksSORVekS4g7mEWkqFh3UoE" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="title" content="Online Singing Competition 2020 in Mumbai- Singing Star"/>
          <meta name="description" content="Singing Star 2020 is an online singing competition to showcase your skills and win a smartphone worth ₹15k."/>
          <meta itemprop="name" content="Online Singing Competition 2020 in Mumbai- Singing Star">
          <meta itemprop="description" content="Singing Star 2020 is an online singing competition to showcase your skills and win a smartphone worth ₹15k.">
          <meta itemprop="image" content="https://singing-star.herokuapp.com/img/star.jpg">
          <meta property="og:title" content="Online Singing Competition 2020 in Mumbai- Singing Star" />
          <meta property="og:type" content="event" />
          <meta property="og:url" content="https://singing-star.herokuapp.com${req.originalUrl}" />
          <meta property="og:image" content="https://singing-star.herokuapp.com/img/star.jpg" />
          <meta property="og:description" content="Singing Star 2020 is an online singing competition to showcase your skills and win a smartphone worth ₹15k." />
          <meta name="twitter:card" content="summary">
          <link rel="canonical" href="https://singing-star.herokuapp.com${req.originalUrl}"/>
          <link rel="alternate" hreflang="default"  href="https://singing-star.herokuapp.com${req.originalUrl}"/>
          <link rel="alternate" hreflang="en" href="https://singing-star.herokuapp.com${req.originalUrl}"/>
          <link rel="stylesheet" type="text/css" href="/app.css" defer/>
          <script type="application/ld+json">
          {
            "@context" : "http://schema.org",
            "@type": "Event",
            "@id" : "https://singing-star.herokuapp.com/",
            "name" : "Online Singing Competition 2020 in Mumbai- Singing Star",
            "startDate" : "2020-06-28",
            "endDate" : "2020-07-28",
            "superEvent" : "https://singing-star.herokuapp.com/register/"
          }
          </script>
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
