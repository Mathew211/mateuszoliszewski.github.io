const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const topBtn = document.getElementById("topBtn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.querySelectorAll("#menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

.dashboard-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 25px;
  color: var(--primary);
}
