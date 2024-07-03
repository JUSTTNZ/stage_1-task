document.addEventListener("DOMContentLoaded", function () {
  // Update the current time in UTC
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
    document.querySelector("[data-testid='currentTimeUTC']").textContent = utcTime;
    document.querySelector("[data-testid='currentDay']").textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Burger menu toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");

  navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navList.classList.toggle("active");
  });

  // Back to top functionality
  const backToTopButton = document.querySelector(".back-to-top");

  backToTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});

