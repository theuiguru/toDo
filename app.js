function checkInput() {
  var val = document.getElementById("ourField").value
  if (val == "Enter a task item(s)") {
    alert("Please enter a task item");
    return false;
  }
  else if (val == "") {
    alert("Please enter a task item");
    return false;
  }
  else {
    return true;
  }
}

let ourForm = document.getElementById("ourForm");
let ourField = document.getElementById("ourField");
let ourList = document.getElementById("ourList");
ourForm.addEventListener("submit", (e) => {
  e.preventDefault();
  createItem(ourField.value);
});

function createItem(x) {
  let ourHTML = `<li>${x} <button class="btn btn-danger" onclick="deleteItem(this)">Delete</button></li>`;
  ourList.insertAdjacentHTML("beforeend", ourHTML);
  ourField.value = "";
  ourField.focus();
}

function deleteItem(elementToDelete) {
  elementToDelete.parentElement.remove();
}