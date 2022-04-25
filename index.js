const nodemailer = require('nodemailer')
// ctnxpzbazrpjgahc
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
            user: 'engamrdiab52@gmail.com',
            pass: 'ctnxpzbazrpjgahc'
    }
})

function main(){
transporter.sendMail({
    from: 'engamrdiab52@gmail.com',
    to:'mesamin338@topyte.com',
    subject: 'Welcom Amr Diab',
    html: "<h1>allah akbr</h1>"
}).then(console.info).catch(console.catch)
}

main()