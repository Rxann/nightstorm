const { createTransport } = require("nodemailer");

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
}

module.exports = mail;
