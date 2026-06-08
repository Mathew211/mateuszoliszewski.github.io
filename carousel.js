class Carousel {
  constructor(wrapper) {
    this.carousel = wrapper.querySelector(".skills-carousel");
    this.leftBtn = wrapper.querySelector(".left");
    this.rightBtn = wrapper.querySelector(".right");

    this.init();
  }

  init() {
    this.leftBtn?.addEventListener("click", () => {
      this.carousel.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    });

    this.rightBtn?.addEventListener("click", () => {
      this.carousel.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    });
  }
}

document.querySelectorAll(".skills-wrapper").forEach((wrapper) => {
  new Carousel(wrapper);
});
