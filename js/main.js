'use strict';

const dataUsers = './data/users.json';
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
  const heartParent = heartUser.parentElement;
  const indexCard = favorites.indexOf(heartParent);
  if (indexCard === -1) {
    favorites.push(heartParent);
    heartParent.classList.add('backgroundColor');
    heartUser.classList.remove('far');
    heartUser.classList.add('fas');
  } else {
    favorites.splice(indexCard, 1)
    heartParent.classList.remove('backgroundColor');
    heartUser.classList.add('far');
    heartUser.classList.remove('fas');
  }
  console.log(favorites);
}

conectToData();

/* /* Mostrar favoritos 

const heartFavorite = document.querySelector('.heart__Nav');

function showFavorite() {
  const cardPrincess = document.querySelectorAll('.card');
  for (const card of cardPrincess){
    
  }
  console.log(cardPrincess)
  for (const favorite of favorites) {
    if (favorite === '') {
      cardPrincess.classList.add('hidden');
    } else {
      console.log('Vamos a pintarlo')
    }
    
  }
}

heartFavorite.addEventListener('click', showFavorite) */
