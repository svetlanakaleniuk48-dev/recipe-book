const links = document.querySelectorAll(".pizza__link");

links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // убираем прыжок наверх

    const page = link.dataset.page;
    window.location.href = page;
  });
});
const button = document.getElementById("bannerBtn");

button.addEventListener("click", function () {
  window.location.href = "details.html";
});
