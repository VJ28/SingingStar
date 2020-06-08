"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrTemplate = ssrTemplate;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _server = require("react-dom/server");

var _styledComponents = require("styled-components");

var _App = _interopRequireDefault(require("../../client/containers/App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ssrTemplate(req, res) {
  res.write(`<!DOCTYPE html>
  <html lang="en-US">
      <head>
          <title>Online Singing Competition 2020 in Mumbai - Singing Star</title>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <link type="image/ico" rel="shortcut icon" href="https://${req.headers.host}/favicon.ico">
          <meta name="google-site-verification" content="oqGRhd80lbrdgjieVf1dksSORVekS4g7mEWkqFh3UoE" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="keywords" content="singing contest, online singing competition 2020, singing competition in mumbai, singing competition in india, online singing competition mumbai, register online, india, 2020" />
          <meta name="title" content="Online Singing Competition 2020 in Mumbai - Singing Star | Singing Contest in India"/>
          <meta name="description" content="Singing Star 2020 is an online singing competition to showcase your talent and win a smartphone worth ₹15k - Online Singing Contest 2020 in Mumbai, India. In times of Covid19 pandemic, stay safe at home and enjoy the leisure of participating online for the contest. Contest is open for all over India."/>
          <meta itemprop="name" content="Online Singing Competition 2020 in Mumbai- Singing Star">
          <meta itemprop="description" content="Singing Star 2020 is an online singing competition to showcase your talent and win a smartphone worth ₹15k.">
          <meta itemprop="image" content="https://singing-star.herokuapp.com/img/star.jpg">
          <meta property="og:title" content="Online Singing Competition 2020 in Mumbai- Singing Star" />
          <meta property="og:type" content="event" />
          <meta property="og:url" content="https://singing-star.herokuapp.com${req.originalUrl}" />
          <meta property="og:image" content="https://singing-star.herokuapp.com/img/star.jpg" />
          <meta property="og:description" content="Singing Star 2020 is an online singing competition to showcase your talent and win a smartphone worth ₹15k." />
          <meta name="twitter:card" content="summary">
          <link rel="canonical" href="https://singing-star.herokuapp.com${req.originalUrl}"/>
          <link rel="alternate" hreflang="x-default"  href="https://singing-star.herokuapp.com${req.originalUrl}"/>
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
            "location" : {
               "@type" : "Place",
               "name" : "India",
               "address": "https://singing-star.herokuapp.com/register/"
            },
            "eventStatus": "EventMovedOnline",
            "image": "https://singing-star.herokuapp.com/img/star.jpg",
            "description": "Singing Star 2020 is an online singing competition to showcase your talent and win a smartphone worth ₹15k - Online Singing Contest 2020 in Mumbai, India. In times of Covid19 pandemic, stay safe at home and enjoy the leisure of participating online for the contest. Contest is open for all over India."
          }
          </script>
          <script type="application/ld+json">
          {
            "@context": "http://schema.org/",
            "@type": "WebSite",
            "name": "Singing Star - Online Singing Competition 2020",
            "alternateName": "Online Singing Contest in Mumbai, India",
            "url": "https://singing-star.herokuapp.com/"
        }
          </script>
      </head>
      <body><div id="root">`);
  const sheet = new _styledComponents.ServerStyleSheet();
  const jsx = sheet.collectStyles( /*#__PURE__*/_react.default.createElement(_reactRouterDom.StaticRouter, {
    location: req.url
  }, /*#__PURE__*/_react.default.createElement(_App.default, null)));
  const stream = sheet.interleaveWithNodeStream((0, _server.renderToNodeStream)(jsx));
  stream.pipe(res, {
    end: false
  }); // and finalize the response with closing HTML

  stream.on("end", () => res.end(`</div>
    <script src="/vendors.js" async></script>
    <script src="/runtime.js" async ></script>
    <script src="/app.js" charset="utf-8" async></script>
    </body>
</html>`));
}