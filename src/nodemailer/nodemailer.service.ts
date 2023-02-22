import { Injectable } from '@nestjs/common';
import * as nodemailer from "nodemailer"
@Injectable()
export class NodemailerService {

    async  main(email:string,confirmationLINK:string) {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // use SSL
            auth: {
                user: process.env.MailerUser,
                pass: process.env.MailerPassword,
            }
        });


        let myMessage = {
            from: '"RoleMay 👻" <repergansterr@gmail.com>',
            to: `${email}`,
            subject: "registration ✔",
            text: "Confirm registration via link :",
            html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Confirm Your Registration</title>
    <style>
        .container {
            max-width: 600px;
            margin: 0 auto;
            text-align: center;
            padding: 20px;
        }

        .ii a[href] {
    color: #ffffff;
}
        h1 {
            font-size: 36px;
            margin-bottom: 20px;
        }

        p {
            font-size: 18px;
            margin-bottom: 20px;
        }

        .button {
            display: inline-block;
            background-color: #ecf4f4;
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
            font-size: 18px;
            margin-bottom: 20px;
        }

        .button:hover {
            background-color: #bdd6e5;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Confirm Your Registration</h1>
        <p>Thank you for registering for our service. To complete the registration process, please click on the link below to confirm your email address:</p>
        <a href="http://localhost:3000/api/auth/confirm/?pSdLin$k=${confirmationLINK}" class="button">Confirm Email Address</a>
        <p>Please note that this is testing project! Many thanks for your attention</p>
    </div>
</body>
</html>
`

        }

        let info = await transporter.sendMail(myMessage);

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

}
