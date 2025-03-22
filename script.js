// toggle icon navbar 


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}


//scroll swctions
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        }
    });

    //sticky Header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}


function sendMail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    let params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      number: document.getElementById("number").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_6defdg4", "template_77xqtkf", params)
      .then(function(response) {
        alert("Your message has been sent successfully!");
        document.getElementById("contact").reset(); // Reset the form
      })
      .catch(function(error) {
        alert("Failed to send your message. Please try again later.");
        console.error("Error:", error);
      });
  }

  document.getElementById("contact").addEventListener("submit", sendMail);
