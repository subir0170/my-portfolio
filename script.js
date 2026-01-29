// ===== Toggle Icon Navbar =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ===== Scroll Sections + Navbar Link Active =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// ===== EmailJS Form Submission =====
function sendMail(event) {
    event.preventDefault(); // Prevent default form submit

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
            document.getElementById("contact").reset(); // Reset form
        })
        .catch(function(error) {
            alert("Failed to send your message. Please try again later.");
            console.error("Error:", error);
        });
}

document.getElementById("contact").addEventListener("submit", sendMail);

// ===== Skills Progress Animation =====
const skillSection = document.querySelector(".skills");
const bars = document.querySelectorAll(".skills .bar span");

const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            bars.forEach(bar => {
                bar.style.width = bar.dataset.percent; // Animate width
            });
            skillObserver.disconnect(); // Run once
        }
    });
}, { threshold: 0.3 });

skillObserver.observe(skillSection);

