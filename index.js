// Select all navigation links and product cards
const navLinks = document.querySelectorAll(".musthave__nav a");
const cards = document.querySelectorAll(".musthave__card");

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    const filter = this.textContent.trim().toLowerCase(); // Get the brand name from the clicked link

    cards.forEach((card) => {
      if (filter === "all" || card.dataset.brand.toLowerCase() == filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Add scroll event to change navbar style
window.addEventListener("scroll", function () {
  const nav = document.querySelector(".nav__container");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled"); // Add class if scrolled down
  } else {
    nav.classList.remove("scrolled"); // Remove class if scrolled back up
  }
});
// navbar
function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}
