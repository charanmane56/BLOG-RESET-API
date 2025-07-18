const nodemail = require("nodemailer")
const code = require("./generateCode")
const {senderEmail,emailPassword} = require("../config/keys")

const sendEmail = async({emailTo,subject, code , content}) => {
const tranporter = nodemail.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure:false,
    auth: {
        user: senderEmail,
        pass: emailPassword
    }
});
const message = {
    to: emailTo,
    subject,
    html: `
    <div>
    <h3>Use this bellow code to ${content}</h3>
    <p><strong> Code: </strong> ${code}</p>
    </div>
    `,
};
await tranporter.sendMail(message)
};

module.exports = sendEmail