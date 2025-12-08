// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a, .contact-btn').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Button: Contact Me (scrolls to contact section)

document.querySelector('.btn-1').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({ behavior: "smooth" });
});







// Small fade effect while scrolling
window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.95)";
    } else {
        header.style.background = "rgba(0,0,0,0.8)";
    }
});








