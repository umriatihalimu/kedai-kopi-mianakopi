// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger-menunya di klik maka
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

// selama yg di klik bukan hamburger dan nav maka hilangkan class activenya atau tutup sidebarnya
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
