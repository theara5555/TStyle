const navLinks = document.querySelectorAll(".musthave__nav a");
const cards = document.querySelectorAll(".musthave__card");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const filter = this.textContent.toLowerCase(); // Get the brand name

    cards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block"; // Show all cards
      } else {
        if (card.dataset.brand === filter) {
          card.style.display = "block"; // Show only selected brand
        } else {
          card.style.display = "none"; // Hide other brands
        }
      }
    });
  });
});
// navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav__container");
  if (window.scrollY > 50) {
    // If scrolled down 50px or more
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
