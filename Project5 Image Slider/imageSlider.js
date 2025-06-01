document.write("hello");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");

const images = document.querySelectorAll(".image");
let slideno = 1;

//frame width is 800
const nextSlider = () => {
  slider.style.transform = `translateX(-${slideno * 800}px)`;
  slideno++;
};

const prevSlider = () => {
  slider.style.transform = `translateX(-${(slideno - 2) * 800}px)`;
  slideno--;
};

const firstSlide = () => {
  slider.style.transform = `translateX(-${(images.length - 1) * 800}px)`;
  slideno = images.length;
};

const lastSlide = () => {
  slider.style.transform = `translateX(0px)`;
  slideno = 1;
};

right.addEventListener("click", () => {
  slideno < images.length ? nextSlider() : firstSlide();
});

left.addEventListener("click", () => {
  slideno > 1 ? prevSlider() : lastSlide();
});
