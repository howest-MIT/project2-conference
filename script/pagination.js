"use strict";
const perpagina = 3;
let data;

const makePagination = function () {
const aantalPaginas = Math.ceil(data.length/perpagina);
console.log(aantalPaginas);

let html_string= "";

for(let i =0; i< aantalPaginas; i++){
  html_string+= `<li class="c-pagination_item">${i+1}</li>`;
}
document.querySelector(".js-pagination").innerHTML=html_string;

const pag_items = document.querySelector(".c-pagination_item");
};

const showData = function (start) {
  start = parseInt(start);
  let stop = data.length;
  let html_tabel = `<table><tr><th>first_name</th><th>last_name</th><th>email</th><th>gender</th><th>id</th></tr>`;

  for (let i = start; i < stop; i++) {
    html_tabel += `<tr><td>${data[i].first_name} </td><td>${data[i].last_name} </td><td>${data[i].email} </td><td>${data[i].gender} </td><td>${data[i].id} </td></tr>`;
  }

  html_tabel += `</table>`;
  document.querySelector(".js-data").innerHTML = html_tabel;
};

const maakPagina = function (json) {

  data = json;

  makePagination();

  showData(0);
};

const init = function () {
  // Haal de data op en roep de functie maakPagina aan.
  handleData('database/database.php',maakPagina);
};

document.addEventListener("DOMContentLoaded", function () {
  // Wacht tot het document geladen is en roep daarna de init op.
  init();
});
