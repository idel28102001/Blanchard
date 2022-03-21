document.addEventListener("DOMContentLoaded", () => {
  (() => {
    const checkBtn = document.querySelector("#categories__checkbox-heading");
    checkBtn.addEventListener("click", function () {
      this.classList.toggle("is-active");
    });
  })();
});
