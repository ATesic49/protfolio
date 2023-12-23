import nodemailer from "nodemailer";

export async function POST(request: Request) {
  //get data from env
  const pass = process.env.APP_PASWORD;

  const { ime, prezime, email, poruka, brojTelefona } = await request.json();
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "atesic7@gmail.com",
      pass: pass,
    },
  });
  // Define email options
  const mailOptions = {
    from: email,
    to: "atesic7@gmail.com",
    subject: `Poruka od ${ime} ${prezime}`,
    text: `${poruka}
    
    Telefon:  ${brojTelefona}
    Mail: ${email}
    `,
  };
  // Send the email
  await transporter.sendMail(mailOptions);

  return Response.json({ ime, prezime, email });
}
