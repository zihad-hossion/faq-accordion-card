const contents = document.querySelectorAll(".content");

contents.forEach((item) => {
  item.addEventListener("click", () => {
    contents.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("active");
      }
    });
    item.classList.toggle("active");
  });
});
