tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {},
  },
};
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

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {},
  },
};
// Count Number
document.addEventListener("DOMContentLoaded", function () {
  const counters = {
    "active-users": 3000,
    transactions: 1230000,
    "total-revenue": 5600000000,
    "happy-customers": 98,
  };

  const animateCounter = (id, target) => {
    let count = 0; // Start counting from 0
    const step = Math.ceil(target / 100); // Calculate step size
    const interval = setInterval(() => {
      count += step; // Increment count
      if (count >= target) {
        count = target; // Ensure we don't exceed the target
        clearInterval(interval); // Stop the interval
      }
      document.getElementById(id).textContent = count.toLocaleString(); // Update the text content
    }, 20); // Update every 20 milliseconds
  };

  const onScroll = () => {
    const section = document.querySelector(".bg-white"); // Select your section
    const sectionPosition = section.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (sectionPosition < viewportHeight) {
      for (const [id, value] of Object.entries(counters)) {
        animateCounter(id, value); // Start counting for each card
      }
      window.removeEventListener("scroll", onScroll); // Remove the scroll event listener to avoid multiple triggers
    }
  };

  window.addEventListener("scroll", onScroll);
});
// Product
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {},
  },
};
// about us
tailwind.config = {
  darkMode: "class",
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {},
  },
};

//
