"use strict";

const table = document.querySelector("table");
const name = document.querySelector("#name");
const date = document.querySelector("#date");
const amount = document.querySelector("#amount");

//Function called when submitting the form.
function submit() {
  // Make a row with 3 cells and add them to the table.
  let row = document.createElement("tr");
  let cell1 = document.createElement("td");
  let cell2 = document.createElement("td");
  let cell3 = document.createElement("td");

  cell1.textContent = name.value;
  cell2.textContent = date.value;
  cell3.textContent = amount.value;

  row.appendChild(cell1);
  row.appendChild(cell2);
  row.appendChild(cell3);

  table.appendChild(row);
}
