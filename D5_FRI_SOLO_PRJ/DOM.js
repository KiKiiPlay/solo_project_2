const container = document.getElementById("container");
const tdElements = document.querySelectorAll("td");
const heading = document.querySelector("h1");
const table = document.querySelector("table");
const rows = document.querySelectorAll("tr");
const list = document.querySelectorAll("li");
const ul = document.querySelector("ul");

const changeH1Name = function () {
  heading.innerText = "New Heading Name";
};

const addNewRow = function () {
  table.innerHTML += `<tr></tr>`;
};

const changeBGLinks = function () {
  const links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    console.log(links[i]);
    links[i].style.backgroundColor = "red";
  }
};

const addClass = function () {
  for (let i = 0; i < rows.length; i++) {
    rows[i].classList.add("test");
    console.log(rows[i].classList);
  }
};

const addItemToList = function () {
  const newLi = document.createElement("li");
  const newItem = "new Item";
  newLi.innerText = newItem;
  ul.appendChild(newLi);
};

const deleteItems = function () {
  const readyULList = document.querySelectorAll("li");
  for (let i = 0; i < readyULList.length; i++) {
    readyULList[i].remove();
  }
};

window.onload = function () {
  for (let i = 0; i < tdElements.length; i++) {
    tdElements[i].innerHTML += `someText`;
  }
  heading.addEventListener("click", changeH1Name);
  table.addEventListener("click", addNewRow);

  addClass();
  changeBGLinks();
  addItemToList();
  deleteItems();

  console.log("Page loaded");
};
