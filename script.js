document.addEventListener("DOMContentLoaded", () => {
  console.log("hello world");
});

const li = document.querySelectorAll("li");
li.forEach((item) => {
  item.style.color = "lightblue";
});
