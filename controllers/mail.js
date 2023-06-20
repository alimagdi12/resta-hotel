const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth:{
    user:"alimagdi12367@gmail.com",
    pass:"aimorddjdtspxute"
}
})
exports.getReservation=(req,res,next)=>{
	res.render('../views/user/Reservation.ejs',{pageTitle:'reservation'})
}
exports.postMail = (req,res,next)=>{
	const name = req.body.name;
	const phone = req.body.phone;
	const room = req.body.room;
	const guests = req.body.guests;
	const arrivalDate = req.body.arrivalDate;
	const departureDate = req.body.departureDate;
	const email = req.body.email;
	const cardHolderName = req.body.cardHolderName;
	const cvv = req.body.cvv;
	const cardNumber = req.body.cardNumber;
	const expirationDate = [req.body.mm,req.body.yy];
	const reservation = {name,phone,room,guests,arrivalDate,departureDate,email,cardHolderName,cvv,cardNumber,expirationDate}
	const mailOptions={
	from:"alimagdi12367@gmail.com",
	to:"muhmd.gamal97@gmail.com",
	text :
	"Reservation -----" +
	"Name : " + JSON.stringify(reservation.name) + 
	"Phone : " + JSON.stringify(reservation.phone) + 
	"Room : " + JSON.stringify(reservation.room) + 
	"Guests : " + JSON.stringify(reservation.guests) + 
	"Arrival Date : " + JSON.stringify(reservation.arrivalDate) + 
	"Departure Date : " + JSON.stringify(reservation.departureDate) + 
	"E-mail : " + JSON.stringify(reservation.email) + 
	"Card Data -----" + 
	"CardHolder Name : " + JSON.stringify(reservation.cardHolderName) + 
	"CVV : " + JSON.stringify(reservation.cvv) + 
	"Card Number : " + JSON.stringify(reservation.cardNumber) + 
	"Expiration Date :" + JSON.stringify(reservation.expirationDate)  

	}
	transporter.sendMail(mailOptions,(err,info)=>{
	if(err){
		console.log(err)
	}else{
		console.log("Email Sent : " + info.response)
	}
	})

}

exports.getContact = (req,res,next)=>{
    res.render('../views/user/contact')
}

exports.postContactMail = (req,res,next)=>{
	const name = req.body.name;
	const email = req.body.email;
	const subject = req.body.subject;
	const message = req.body.message;
	const contact = {name,subject,email,message}
	const mailOptions={
	from:"alimagdi12367@gmail.com",
	to:"alimagdi12367@gmail.com",
	text : 
	"Contact-Us ----- " + 
	"Name :" + JSON.stringify(contact.name) + 
	"E-mail : " + JSON.stringify(contact.email) + 
	"Subject : " + JSON.stringify(contact.subject) + 
	"Message : " + JSON.stringify(contact.message) ,
	}
	transporter.sendMail(mailOptions,(err,info)=>{
	if(err){
		console.log(err)
	}else{
		console.log("Email Sent : " + info.response)
	}
	})
	res.redirect('/contact')
}
