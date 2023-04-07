const contact = require("./../models/Contact")
const { sendEmail } = require("../utils/email")

exports.addContactInfo = async (req, res) => {
    try {

        const result = await contact.create(req.body)
        sendEmail({
            sendTo: "aga19092001@gmail.com",
            sub: ` Regarding Your Portfolio ${result.name} send message`,
            msg: `
            Email of sender: ${result.email},
            subject: ${result.subject},
            message:
        ${result.message}`

        })


        res.json({
            success: true,
            message: `${result.name} send message successfully`,
            result: {
                name: result.name,
                email: result.email,
                subject: result.subject,
                id: result._id,

            }
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}



exports.getAllContactInformation = async (req, res) => {
    try {

        const result = await contact.find()

        res.json({
            success: true,
            message: `All information fetched successfully`,
            result: {
                allinfo: result,

            }
        })
    } catch (error) {
        res.status(400).json({
            message: `error ${error.message}`
        })
    }
}