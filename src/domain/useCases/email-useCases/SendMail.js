const transporter = require('../../../infra/email/transporter');

const sender = process.env.EMAIL_SENDER_NAME;
const senderEmail = process.env.EMAIL_SENDER_EMAIL;

const send = async mail => {
    await transporter.sendMail(mail);
};

const sendMail = async (to, subject, text) => {
    const mail = {
        from: `${sender} <${senderEmail}>`,
        to,
        subject,
        text,
    };

    await send(mail).catch(err => console.log(err));
}

module.exports = sendMail;
