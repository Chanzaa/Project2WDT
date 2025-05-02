document.addEventListener("DOMContentLoaded", function () {

  // slideshow scripting
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slides.length > 0) {
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
  }

  // form validation for Donation scripting
  const donateForm = document.getElementById("donateForm");
  if (donateForm) {
    donateForm.addEventListener("submit",function (e) {
      e.preventDefault();

      const donoteform =e.target; 

      const donorname = document.getElementById("donorname").value.trim();
      const donoremail = document.getElementById("donoremail").value.trim();
      const donoramount = document.getElementById("donoramount").value.trim();
      const donorpaymentmethod = document.getElementById("donorpaymentMethod").value.trim();
      const donormessage = document.getElementById("donormessage").value.trim();

      let errors = [];

      //name validation
      if(donorname === "" ) {
        errors.push("Please enter your full name.");
      }else if (/\d/.test(donorname)) {
        errors.push("Full name cannot contain numbers.");
      }

      //email validation
      if(donoremail === "") {
        errors.push("Please enter your email.");
      }else if (!/^\S+@\S+\.\S+$/.test(donoremail)) {
        errors.push("Please enter a valid email address.");
      }

      // amount validation
      if(donoramount === "") {
        errors.push("Please enter your amount.");
      }

      // payment validation
      if(donorpaymentmethod === "") {
        errors.push("Please select your payment method.");
      }

      // message validation
      if(donormessage === "") {
        errors.push("Please enter your message.");
      }

      if(errors.length > 0){
        alert(errors.join("\n"));
      }else {
        alert("Thank You for Your Generous Donation!");
        donoteform.reset();
      }

    });
  }

  // form validation for join Volunteering scripting
  const volunteerForm = document.getElementById("volunteerForm");
  if (volunteerForm) {
    volunteerForm.addEventListener("submit",function (e) {
      e.preventDefault();

      const volunteerform =e.target; 

      const volunteername = document.getElementById("volunteername").value.trim();
      const volunteeremail = document.getElementById("volunteeremail").value.trim();
      const volunteerphone = document.getElementById("volunteerphone").value.trim();
      const volunteeravailability = document.getElementById("volunteeravailability").value.trim();
      const volunteerskills = document.getElementById("volunteerskills").value.trim();
      const volunteermessage = document.getElementById("volunteermessage").value.trim();

      let errors = [];

      //name validation
      if(volunteername === "" ) {
        errors.push("Please enter your full name.");
      }else if (/\d/.test(volunteername)) {
        errors.push("Full name cannot contain numbers.");
      }
      
      // email validation
      if(volunteeremail === "") {
        errors.push("Please enter your email.");
      }else if (!/^\S+@\S+\.\S+$/.test(volunteeremail)) {
        errors.push("Please enter a valid email address.");
      }

      // phone validation
      if(volunteerphone === "") {
        errors.push("Please enter your phone number.");
      } else if (!/^\d{10,15}$/.test(volunteerphone)) {
        errors.push("Phone number must contain only digits (10–15 digits).");
      }

      //Date validation
      if(volunteeravailability === "") {
        errors.push("Please select your date.");
      }
      
      //skill validation
      if(volunteerskills === "") {
        errors.push("Please enter your skill or experience.");
      }

      //message validation
      if(volunteermessage === "") {
        errors.push("Please enter your message.");
      }


      if(errors.length > 0){
        alert(errors.join("\n"));
      }else {
        alert("Thank You for Volunteering!\nOur team will be in touch with you soon with more details on how you can get involved.");
        volunteerform.reset();
      }

    });
  }




  // Form validation for contact us scripting
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const contactform = e.target;

      const name = document.getElementById("fullname").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value.trim();

      let errors = [];
      //name validation
      if (name === "") {
        errors.push("Please enter your full name.");
      } else if (/\d/.test(name)) {
        errors.push("Full name cannot contain numbers.");
      }

      //email validation
      if (email === "") {
        errors.push("Please enter your email.");
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        errors.push("Please enter a valid email address.");
      }

      //phone validation
      if (phone === "") {
        errors.push("Please enter your phone number.");
      } else if (!/^\d{10,15}$/.test(phone)) {
        errors.push("Phone number must contain only digits (10–15 digits).");
      }

      //subject validation
      if (subject === "") {
        errors.push("Please select a subject.");
      }

      //date validation
      if (preferredDate === "") {
        errors.push("Please select a preferred date.");
      } else {
        const selectedDate = new Date(preferredDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Ignore time for comparison
  
        if (selectedDate < today) {
          errors.push("Preferred date cannot be in the past.");
        }
      }

      //message validation
      if (message === "") {
        errors.push("Please enter your message.");
      }

      if (errors.length > 0) {
        alert(errors.join("\n"));
      } else {
        alert("✅ Your message has been sent!");
        contactform.reset();
      }
    });
  }
});