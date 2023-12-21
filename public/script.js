document.addEventListener('DOMContentLoaded', function () {
    var contactForm = document.getElementById('contact-form');
  
    if (contactForm) {
      contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
  
        // Get form data
        var formData = new FormData(contactForm);
  
        // You can add form validation here if needed
  
        // Example: Log form data to the console
        for (var pair of formData.entries()) {
          console.log(pair[0] + ': ' + pair[1]);
        }
  
        // Clear form fields (you may want to customize this based on your needs)
        contactForm.reset();
      });
    }
  });
  