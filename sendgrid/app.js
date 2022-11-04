const sgMail = require("@sendgrid/mail");
const { Then } = require("cucumber");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

async function sgMailUser(data) {
  try {
    await sgMail.send(data);
  } catch (error) {
    console.error(error);
  }
}

module.exports = sgMailUser;