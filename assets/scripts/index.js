// create elements
const inputNewItem = document.getElementById("inputNewItem");
const btnNewItem = document.getElementById("btnNewItem");
const listItems = document.getElementById("list");

console.log(btnNewItem);
// btn, input and ul references
// detect button click

function insertListItem() {
  const li = `<li class="list-group-item d-flex justify-content-between">${inputNewItem.value} <button class="btn btn btn-danger">Delete</button></li>`;
  listItems.insertAdjacentHTML("beforeend", li);
}

btnNewItem.addEventListener("click", () => {
  // extract value of input
  insertListItem();
  inputNewItem.value = "";
  inputNewItem.focus();
});

// event delegation
//delete item
document.addEventListener("click", (e) => {
  const deleteBtnElement = e.target;
  if (deleteBtnElement.classList.contains("btn-danger")) {
    const li = deleteBtnElement.parentElement;
    listItems.removeChild(li);
  }
});

// create a new <li> dentro da <ul> existente
