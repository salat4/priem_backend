const express = require("express");
const app = express();
const snapshot = require("./snapshot.json");
const cors = require("cors");
const sgMailUser = require("./sendgrid/app");
const fsz = require("fs");
const axios = require("axios");
app.use(cors());
app.use(express.json());

app.get("/snapshot", (req, res) => {
  res.json(snapshot);
});

app.get("/video", async (req, res) => {
  try {
    const res = await axios.post(
      "https://api.vimeo.com/oauth/authorize/client",
      req.body,
      req.headers
    );
    console.log("first");
  } catch (error) {
    res.json(error);
  }
});

// https://drive.google.com/drive/folders/1fxqd9hhnhPNHuUQ70r_1nXqoH4lt8AXO?usp=share_link

// app.post("/submit", (req, res) => {
//   // console.log(req.body.mail);
//   async function sendMail() {
//     const data = {
//       to: `sophimeri@gmail.com`,
//       from: "mdima4266@gmail.com",
//       subject: "New one",
//       text: `Hi, i want to work with you. It's my mail ${req.body.mail}`,
//     };
//     await sgMailUser(data);
//   }
//   sendMail();
//   console.log("All good");
// });

// app.
// const fs = require("fs").promises;
// const path = require("path");
// const process = require("process");
// const { authenticate } = require("@google-cloud/local-auth");
// const { google } = require("googleapis");

// If modifying these scopes, delete token.json.
// const SCOPES = [
//   "https://www.googleapis.com/auth/drive",
//   "https://www.googleapis.com/auth/drive.metadata",
//   "https://www.googleapis.com/auth/drive.file",
//   "https://www.googleapis.com/auth/drive.file",
// ];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
// const TOKEN_PATH = path.join(process.cwd(), "token.json");
// const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

/**
 * Reads previously authorized credentials from the save file.
 *
 */
// async function loadSavedCredentialsIfExist() {
//   try {
//     const content = await fs.readFile(TOKEN_PATH);
//     const credentials = JSON.parse(content);
//     return google.auth.fromJSON(credentials);
//   } catch (err) {
//     return null;
//   }
// }
// async function saveCredentials(client) {
//   const content = await fs.readFile(CREDENTIALS_PATH);
//   const keys = JSON.parse(content);
//   const key = keys.installed || keys.web;
//   const payload = JSON.stringify({
//     type: "authorized_user",
//     client_id: key.client_id,
//     client_secret: key.client_secret,
//     refresh_token: client.credentials.refresh_token,
//   });
//   await fs.writeFile(TOKEN_PATH, payload);
// }

/**
 * Load or request or authorization to call APIs.
 *
 */
// async function authorize() {
//   let client = await loadSavedCredentialsIfExist();
//   if (client) {
//     return client;
//   }
//   client = await authenticate({
//     scopes: SCOPES,
//     keyfilePath: CREDENTIALS_PATH,
//   });
//   if (client.credentials) {
//     await saveCredentials(client);
//   }
//   return client;
// }

// async function downloadFile(authClient) {
//   var dest = fsz.createWriteStream('images/photo.jpg');
//   const drive = google.drive({ version: "v3", auth: authClient });
//   let fileId = "16bD0eIlQg2NZ6TlmqxINn1Rfp4MEpAOZQlSiyA4U_Vc";

//   try {
//     const file = await drive.files.get({
//       fileId: fileId,
//       mimeType:'application/vnd.google-apps.document'
//       alt: "media",
//     });
//     console.log(file.data);
//     return file;
//   } catch (err) {
//     // TODO(developer) - Handle error
//     throw err;
//   }
// }

// authorize().then(downloadFile).catch(console.error);

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
