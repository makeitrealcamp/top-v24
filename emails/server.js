const nodemailer = require("nodemailer")

const send = async () => {
  const account = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: account.user,
      pass: account.pass,
    }
  })

  const user = { email: "noah@test.com", name: "Noah Zapata" }

  const styles = {
    container: "background-color: black; border: 1px solid gray; color: white;",
    title: "text-decoration: underline;"
  }

  const preview = await transporter.sendMail({
    from: "<admin@clonairbnb.com>",
    to: user.email,
    subject: "Welcome",
    html: `
      <div style="${styles.container}">
        <h1 style="${styles.title}"> Bienvenido ${user.name} </h1>
        <p> Hola ${user.name}, bienvenido a esta nueva app</p>
      </div>     
    `,
    text: `Hola ${user.name}, bienvenido a esta nueva app www.google.com`
  })

  console.log(nodemailer.getTestMessageUrl(preview))
}

send()