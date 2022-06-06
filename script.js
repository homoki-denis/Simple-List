const input = document.querySelector("#input-text");
const form = document.querySelector("#main-form");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const item = document.createElement("div");
  item.classList.add("item");
  item.innerHTML = input.value;
  list.appendChild(item);
  console.log(item);
  input.value = "";

  item.addEventListener("click", () => {
    item.remove();
  });
});
