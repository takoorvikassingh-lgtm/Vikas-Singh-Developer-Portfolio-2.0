/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("open");

});


/* Close menu after clicking a link */

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeToggle.textContent = "☀";

        localStorage.setItem("theme", "light");

    } else {

        themeToggle.textContent = "☾";

        localStorage.setItem("theme", "dark");

    }

});


/* Remember theme */

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "☀";

}


/* =========================================
   COPY EMAIL
========================================= */

const copyEmail =
    document.getElementById("copyEmail");

copyEmail.addEventListener("click", async () => {

    const email =
        "takoorvikassingh@gmail.com";

    try {

        await navigator.clipboard.writeText(email);

        copyEmail.textContent =
            "✓ Email Copied!";

        setTimeout(() => {

            copyEmail.textContent =
                "⧉ Copy Email";

        }, 2000);

    } catch {

        alert("Email: " + email);

    }

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-main, .mini-card, " +
    ".skill-card, .project-card, .contact-card"
);

revealElements.forEach(element => {

    element.classList.add("reveal");

});


const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();