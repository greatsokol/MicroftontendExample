const compression = require('compression');
const express = require('express');
const fs = require('fs');
const app = express();
const https = require('https');
const cors = require("cors");

const rootDir = "dist/mf-example";
const port = 4201;
const nonce = '1111111';
const dataUrl = "https://kcusers.local";
const kcUrl = "https://keycloak.local";
const allowedUrls = dataUrl + ' ' + kcUrl;

app.use(cors());
app.use(compression());
app.use(express.static(rootDir, {maxAge: 0, index: false}));
app.all("/*", (req, res) => {
  let data = fs.readFileSync(rootDir + '/index.html', 'utf8');

  let data_nonced = data.replaceAll('**CSP_NONCE**', nonce)
    .replaceAll('<script', '<script nonce="' + nonce + '" ')
    .replaceAll('<link', '<link nonce="' + nonce + '" ')
    .replaceAll('<style', '<style nonce="' + nonce + '" ');

  res.setHeader("Content-Security-Policy-Report-Only",
    "default-src 'self' " + allowedUrls + "; " +
    "img-src 'self' data: image/svg+xml "+allowedUrls+"; "+
    "style-src 'self' 'nonce-" + nonce + "'; " +
    "script-src 'self' 'strict-dynamic' 'nonce-" + nonce + "'; " +
    "font-src 'self' data: " + allowedUrls + ";");

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");

  res.status(200).send(data_nonced);
});

const privateKey = fs.readFileSync('certs/any.local.key', 'utf8');
const certificate = fs.readFileSync('certs/any.local.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};
const httpsServer = https.createServer(credentials, app);
console.log('App listening at https://localhost:' + port);
httpsServer.listen(port);
