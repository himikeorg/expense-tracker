"use strict";

const table = document.querySelector("table");
const name = document.querySelector("#name");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");
const clearAll = document.querySelector(".clear-all");

let total = 0;

//Function called when submitting the form.
function submit() {
  // Update total
  total += Number(amount.value);
  // Make a row with 3 cells and add them to the table.
  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");
  let cell3 = document.createElement("td");
  let cell4 = document.createElement("td");

  cell1.textContent = name.value;
  cell2.textContent = date.value;
  cell3.textContent = amount.value;
  cell4.textContent = total.toFixed(2);

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);
  row.appendChild(cell4);

  table.appendChild(row);

  // Clear all button
  clearAll.addEventListener("click", function () {
    row.classList.add("hidden");
    total = 0;
  });
}
