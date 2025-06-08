document.addEventListener("DOMContentLoaded", function () {
  // =============================================================================== Toggle Theme
  const themeToggles = document.querySelectorAll("#theme");
  const rootElement = document.documentElement;
  const currentTheme = localStorage.getItem("theme");

  // =============================================================== Set tema sesuai localStorage
  if (currentTheme === "light") {
    rootElement.classList.add("light");
    themeToggles.forEach((toggle) => (toggle.textContent = "☀️"));
  }

  themeToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      rootElement.classList.toggle("light");

      if (rootElement.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        themeToggles.forEach((t) => (t.textContent = "☀️"));
      } else {
        localStorage.setItem("theme", "dark");
        themeToggles.forEach((t) => (t.textContent = "🌙"));
      }
    });
  });

  // =============================================================================== Hamburger Menu
  const menuButton = document.getElementById("hamburger-menu");
  const menuOverlay = document.getElementById("menu-overlay");
  const menuContent = document.querySelector(".menu-content");

  if (!menuButton) console.error("Hamburger button tidak ditemukan!");
  if (!menuOverlay) console.error("Menu overlay tidak ditemukan!");
  if (!menuContent) console.error("Menu content tidak ditemukan!");

  function closeMenu() {
    menuOverlay.classList.remove("active");
    menuButton.innerHTML = '<i data-feather="menu"></i>';
    requestAnimationFrame(() => feather.replace());
  }

  function toggleMenu() {
    if (menuOverlay.classList.contains("active")) {
      closeMenu();
    } else {
      menuOverlay.classList.add("active");
      menuButton.innerHTML = '<i data-feather="x"></i>';
      requestAnimationFrame(() => feather.replace());
    }
  }

  menuButton?.addEventListener("click", toggleMenu);
  menuContent?.addEventListener("click", closeMenu);

  window.addEventListener("resize", function () {
    if (window.innerWidth > 758) {
      closeMenu();
    }
  });

  // ============================================================================== Animasi .about
  const items = document.querySelectorAll(".about .item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 300);
        }
      });
    },
    { threshold: 0.3 }
  );

  items.forEach((item) => observer.observe(item));

  // ============================================================================== Tutup menu jika klik di luar menu overlay
  menuOverlay?.addEventListener("click", function (e) {
    if (e.target === menuOverlay) {
      closeMenu();
    }
  });

  // ============================================================================== Animasi .contact
  const contactItems = document.querySelectorAll(".contact .item");

  const contactObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 300);
        }
      });
    },
    { threshold: 0.3 }
  );

  contactItems.forEach((item) => contactObserver.observe(item));

  // ============================================================================== Animasi .contact
  const projectItems = document.querySelectorAll(".project .item");

  const projectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 300); // Efek delay berurutan
        }
      });
    },
    { threshold: 0.3 }
  );

  projectItems.forEach((item) => projectObserver.observe(item));

  // ============================================================================== Img slide
  const arrowRight = document.querySelector(".arrow-right");
  const arrowLeft = document.querySelector(".arrow-left");
  const imgSlide = document.querySelector(".img-slide");
  const portfolioDetail = document.querySelectorAll(".detail");

  let index = 0;

  function updateCarousel() {
    imgSlide.style.transform = `translateX(-${index * 105}%)`;

    portfolioDetail.forEach((detail) => {
      detail.classList.remove("active");
    });
    portfolioDetail[index].classList.add("active");
  }

  arrowRight.addEventListener("click", () => {
    if (index < 1) {
      index++;
      arrowLeft.classList.remove("disabled");
      arrowRight.classList.add("disabled");
    } else {
      index = 1;
      arrowRight.classList.add("disabled");
    }
    updateCarousel();
  });

  arrowLeft.addEventListener("click", () => {
    if (index > 0) {
      index--;
      arrowRight.classList.remove("disabled");
      arrowLeft.classList.add("disabled");
    } else {
      index = 0;
      arrowLeft.classList.add("disabled");
    }
    updateCarousel();
  });
});
