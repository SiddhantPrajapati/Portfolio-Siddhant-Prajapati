//const emailjs = require('emailjs-com');

emailjs.init('Siddhant');
document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.getElementById('contact-form');
    //console.log(contactForm)
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        console.log(contactForm.name.value)
        console.log(contactForm.email.value)
        console.log(contactForm.message.value)

        const email = new emailjs.SMTPClient("sidkp.official@gmail.com", "Siddhant");

        email.sendForm({
          from: "sidkp.official@gamil.com",
          to: contactForm.email.value,
          subject: "Subject of the email",
          body: contactForm.message.value
        }).then(
          function (message) {
            console.log("Email sent successfully", message);
            // You can add further actions here, like showing a success message or redirecting the user.
          },
          function (error) {
            console.log("Failed to send email. Error:", error);
            // You can handle errors here, like showing an error message to the user.
          }
        );
        // Clear form fields (you may want to customize this based on your needs)
        contactForm.reset();
      });
    }
  });
  