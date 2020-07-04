'use strict';

const dataUsers = '../data/users.json';
const listHTML = document.querySelector('.js-user-list');

let users = [];
let favorites = [];

/* Do your magic! 🦄🦄🦄*/

function conectToData() {
  fetch(dataUsers)
    .then((response) => response.json())
    .then((data) => {
      users = data;
      paintUsers(users);
    });
}

conectToData();

function paintUsers(arr) {
  for (let user of arr) {
    listHTML.innerHTML += `<li class="content__list"><div class="card"><div class ="img"><img class="foto" src="${user.picture}"></div><h3 class="name">${user.name}</h3><p class="text">${user.comment}</p><i class="far fa-heart heart"></i></div></li>`;
  }
}
