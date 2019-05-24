const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
    auth: {
        user: "53f1f9f849df6a",
        pass: "6d9595d8472fd9"
    }
});

module.exports = {

    create: function(req, res, next) {

        userModel.create({ name: req.body.name, email: req.body.email, phone: req.body.phone, password: req.body.password }, function (err, result) {
            if (err)
                next(err);
            else
                res.json({status: "success", message: "User added successfully!!!", data: null});

        });
    },
    authenticate: function(req, res, next) {
        userModel.findOne({email:req.body.email}, function(err, userInfo){
            if (err) {
                next(err);
            } else {
                if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});
                }else{
                    res.json({status:"error", message: "Invalid email/password!!!", data:null});
                }
            }
        });
    },
    send_mail: function(req, res, next) {
          //Sending Emails
          console.log(req.body);
          const mailOptions = {
            from: "'Gift Shop' <support@giftshop.lk>", // sender address
            to: req.body.user_mail, // list of receivers
            subject: "Gift Shop Order confirmation", // Subject line
            text: "your payment has been Recieved Thank You !.", // plain text body
            html:
              "your payment has been Recieved <br> Order ID:" +
              req.body.order_id +
              "<br>" +
              "Total Payed: LKR: " +
              req.body.total_amount +
              "<br>" // html body
          };

            //sending Email Useing SendMail Method
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log("Message sent: %s", info.messageId); //getting Email ID
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          });
          res.json({status:"success", message: "Email Sent !", data:null});
    },
}
