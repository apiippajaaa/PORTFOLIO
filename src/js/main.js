import "./ui/stars.js";
import "./ui/carousel.js";
import "./pages/services.js";

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");
  const heroSection = document.querySelector("#hero");
  const scrollIndicator = document.querySelector(".scroll-indicator");

  /* =============================
     HERO OBSERVER (Scroll Indicator)
  ============================== */
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          scrollIndicator.classList.add("is-hidden");
        } else {
          scrollIndicator.classList.remove("is-hidden");
        }
      });
    },
    { threshold: 0.15 }
  );

  if (heroSection) heroObserver.observe(heroSection);

  /* =============================
     REVEAL OBSERVER
  ============================== */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.2 }
  );

  reveals.forEach((el) => revealObserver.observe(el));
});
