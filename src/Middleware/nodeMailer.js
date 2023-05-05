const nodemailer = require("nodemailer");
const { generateOtp } = require("./generateOTP");
const { Emailveryfi } = require("../Model/emailveryfiMode");

const sendMail = async (req, res) => {
  try {
    const { email } = req.body;
    const Otp = await generateOtp();
    console.log("otp", Otp);
    const userData = await Emailveryfi.findOne({
      email:email.toLowerCase(),
    });
    console.log("email", userData);
    if (userData !== null) {
      const updateOtp = await Emailveryfi.updateOne(
        { email:email.toLowerCase() },
        {
          $set: {
            otp: Otp,
          },
        }
      );
      res.status(200).json({msg:`update Otp`,data:updateOtp})
    } else {
      const insertData = await Emailveryfi.create({
        email: email.toLowerCase(),
        otp: Otp,
      });
     res.status(200).json({msg:`create new otp `,data:insertData})
    }

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "prince@takniik.com", // generated ethereal user
        pass: "moizhjibtfvmwwcs", // generated ethereal password
      },
    });

    var mailOptions = {
      from: "prince@takniik.com",
      to: email.toLowerCase(),
      subject: "For veryfi email...",
      Text: "First Email send from nodejs nodemailer own made Package ( for auto emails of banking)",
      html: `<p>please veryfi your email ${Otp}`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
        return false;
      } else {
        res.json({ msg: "Email sent successfully" });
        res.send(transporter);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  sendMail,
};
