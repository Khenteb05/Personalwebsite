const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `
    <h3>New Contact Message</h3>
    <p><strong>Name:</strong> ${fullname.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Phone:</strong> ${phone.value}</p>
    <p><strong>Message:</strong><br>${message.value}</p>
    `;

  Email.send({
    SecureToken: "a4ae217e-7eec-4ace-9f68-a30b7d863e13", //add your token here
    To: "khene.dorjie05@gmail.com",
    From: "khene.dorjie05@gmail.com",
    Subject: subject.value,
    Body: ebody,
  }).then((response) => {
    if (response === "OK") {
      alert("Successfully sent message!");
    } else {
      console.error("Error sending email:", response);
      alert("Message Sent Unsuccessful. Please try again.");
    }
  });
});
