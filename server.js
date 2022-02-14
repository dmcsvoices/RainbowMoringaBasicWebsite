const express = require('express');
const app = express();

const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 5000;


// Middleware
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req,res)=>{
    res.sendFile(__dirman + '/public/orderMoringa.html')
})

app.post('/', (req, res)=> {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rainbowmoringa@gmail.com',
            pass: 'fxAH#zFL@afn65A&'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to:'rainbowmoringa@gmail.com',
        subject: `Message from ${req.body.emailAddr}: ${req.body.phoneNum}`,
        text: req.body.emailAddr
    }
    transporter.sendMail(mailOptions,(error, info)=>{
        if(error) {
            console.log(error);
            res.send('error');

        }else{
            console.log('Email Success');
            res.send('success')
        }
    })
})





app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)

})