const nodemailer = require("nodemailer")

exports.sendEmail = ({ sendTo, msg, sub, }) => {
    const transporter = nodemailer
        .createTransport({
            service: "gmail",
            auth: {
                user: "ambreakanksha586@gmail.com",
                pass: "xnuziqnknxoietfn"
            }
        })  //end
    transporter.sendMail({
        to: sendTo,
        from: "ambreakanksha586@gmail.com",
        subject: sub,
        text: msg
    }, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("email send successfully")
        }
    })
}







