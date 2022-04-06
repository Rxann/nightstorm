const { createTransport } = require("nodemailer");
/**
 *
 * @param {String} host - The host of the SMTP server
 * @param {Number} port - The port to connect to
 * @param {String} username - The username to authenticate with
 * @param {String} password - The password to authenticate with
 * @param {String} from - The email address to send from
 * @param {String} to - The email address to send to
 * @param {String} subject - The subject of the email
 * @param {String} text - The text of the email
 * @param {Boolean} secure - Whether or not to use TLS
 * @return {null} - Returns nothing
 */
async function mail(
  host,
  port,
  username,
  password,
  from,
  to,
  subject,
  text,
  secure
) {
  let transporter = createTransport({
    host: host,
    port: port,
    secure: secure,
    auth: {
      user: username,
      pass: password,
    },
  });

  let info = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: text,
  });
  return null;
}

module.exports = mail;
