const nodemailer = require("nodemailer");
// const dotenv = require("dotenv");
// dotenv.config();

const contact = (req, res) => {
  const email = req.body.email;
  const title = req.body.title;
  const question = req.body.question;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "proenglishxad@gmail.com",
      pass: "swetcfezazfuuauj",
    },
  });

  const mailOption = {
    from: email,
    to: "proenglishxad@gmail.com",
    subject: title,
    text: question,
  };

  transporter.sendMail(mailOption, function (err, data) {
    if (err) {
      console.log("Error Occures" + err);
    } else {
      console.log("Email sent!!!!");
      res.json(data);
    }
  });
};

export default contact;
