function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// AOS init
AOS.init({ duration: 800, once: true });

// Typed.js typewriter effect
new Typed("#typed-text", {
  strings: ["Full Stack Web Developer", "MERN Stack Developer", "React & Node.js Developer"],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true,
});

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#desktop-nav .nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});
