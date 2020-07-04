'use strict';

const dataUsers = '../data/users.json';
const listHTML = document.querySelector('.js-user-list');

let users = [];

/* Do your magic! 🦄🦄🦄*/

function conectToData() {
  fetch(dataUsers)
    .then((response) => response.json())
    .then((data) => {
      users = data;
      paintUsers(users);
    });
}

function paintUsers(arr) {
  for (let i = 0; i < arr.length; i++) {
    const user = users[i];
    listHTML.innerHTML += `<li class="content__list"><div id="princess${i}" class="card"><div class ="img"><img class="foto" src="${user.picture}"></div><h3 class="name">${user.name}</h3><p class="text">${user.comment}</p><i id="heart${i}" class="far fa-heart heart"></i></div></li>`;
  }

  listenerHeart();
}

/* Listen Heart */
function listenerHeart() {
  const hearts = document.querySelectorAll('.heart');
  for (const heart of hearts) {
    heart.addEventListener('click', addFavourite);
  }
}

let favorites = [];

function addFavourite(ev) {
  const heartUser = ev.currentTarget;
  console.log(heartUser);
  const heartParent = heartUser.parentElement;
  console.log(heartParent);
  if (favorites.indexOf(heartParent) === -1) {
    favorites.push(heartParent);
    heartUser.classList.remove('heart');
    heartUser.classList.add('iconBold');
    heartParent.classList.add('backgroundColor');
  } else {
    favorites.reverse(heartParent);
    heartParent.classList.remove('backgroundColor');
  }
  console.log(favorites);
}

conectToData();
