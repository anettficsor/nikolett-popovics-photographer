
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}


const filterButtons = document.querySelectorAll(".filter-button");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    portfolioItems.forEach((item) => {
      const itemCategory = item.dataset.category;
      const shouldShow = selectedCategory === "all" || selectedCategory === itemCategory;

      item.style.display = shouldShow ? "flex" : "none";
    });
  });
});

// Sütiértesítő
const cookieBanner = document.getElementById("cookieBanner");
const cookieAccept = document.getElementById("cookieAccept");
const cookieReject = document.getElementById("cookieReject");

// Megnézzük, hogy a látogató választott-e már.
const cookieChoice = localStorage.getItem("cookieChoice");

// Ha még nem választott, megjelenítjük az értesítőt.
if (cookieBanner && !cookieChoice) {
  cookieBanner.classList.add("show");
}

// Elfogadás
if (cookieAccept) {
  cookieAccept.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "accepted");
    cookieBanner.classList.remove("show");
  });
}

// Elutasítás
if (cookieReject) {
  cookieReject.addEventListener("click", () => {
    localStorage.setItem("cookieChoice", "rejected");
    cookieBanner.classList.remove("show");
  });
}