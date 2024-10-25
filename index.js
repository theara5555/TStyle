// Select all navigation links and product cards
const navLinks = document.querySelectorAll(".musthave__nav a");
const cards = document.querySelectorAll(".musthave__card");

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior

    const filter = this.textContent.toLowerCase(); // Get the brand name from the clicked link

    // Loop through each card to show/hide based on the selected brand
    cards.forEach((card) => {
      if (filter === "all") {
        card.style.display = "block"; // Show all cards if "ALL" is clicked
      } else {
        // Show only the cards that match the selected brand
        if (card.dataset.brand === filter) {
          card.style.display = "block"; // Show matching brand cards
        } else {
          card.style.display = "none"; // Hide non-matching brand cards
        }
      }
    });c
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
