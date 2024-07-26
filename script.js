const ratingButtons = document.querySelectorAll(".button_flex .rating_btn");
const star = document.getElementById("star");
const submit_btn = document.getElementById("submit");
const box_container = document.getElementById("box_container");
const thank = document.getElementById("thank");
let starNum = 1;

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = parseInt(btn.textContent, 10);
    starNum = value;
    console.log(`Button ${value} clicked`);
    ratingButtons.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    console.log(btn);
    star.innerHTML = `
        <div class="rating">
          <img src="/images/icon-star.svg" alt="" class="rating_star" />
        </div>`.repeat(starNum);
    submit_btn.disabled = false;
  });
});

submit_btn.addEventListener("click", () => {
  box_container.style.display = "none";
  thank.style.display = "flex";
  setTimeout(() => {
    thank.style.display = "none";
    box_container.style.display = "flex";
  }, 3000);
});
