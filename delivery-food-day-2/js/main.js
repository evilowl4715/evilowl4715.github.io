'use strict';



// day 1
const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginInput = document.querySelector('#login');
const logInForm = document.querySelector('#logInForm');
const labelAuth = document.querySelector('.label-auth span');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const cardsRestaurants = document.querySelector('.cards-restaurants');
const containerPromo = document.querySelector('.container-promo');
const restaurants = document.querySelector('.restaurants');
const menu = document.querySelector('.menu');
const cardsMenu = document.querySelector('.cards-menu');

let login = localStorage.getItem('gloDelivery');


cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);
closeAuth.addEventListener('click', toggleModalAuth);
buttonAuth.addEventListener('click', toggleModalAuth);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//Открываем модалку авторизации
function toggleModalAuth() {
  modalAuth.classList.toggle("is-open");
  labelAuth.textContent = 'Логин';
  labelAuth.style.color = '#000';
}

//Если авторизованы
function authorized() {

  //Выход из логина
  function loginOut() {
    login = '';
    logInForm.reset();
    buttonAuth.style.display = '';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', loginOut);
    checkAuth();
    labelAuth.textContent = 'Логин';
    labelAuth.style.color = '#000';
    localStorage.removeItem('gloDelivery')
  }

  buttonOut.addEventListener('click', loginOut);

  console.log('Авторизован');
  userName.textContent = login;
  buttonAuth.style.display = 'none';
  userName.style.display = 'block';
  buttonOut.style.display = 'block';
}

//Если не авторизованы
function notAuthorized() {
  console.log("не Авторизован");

//Авторизовываемся
  function logIn(e) {
    e.preventDefault();
    labelAuth.textContent = 'Введите логин';
    labelAuth.style.color = 'red';
    login = loginInput.value;


    localStorage.setItem('gloDelivery', login);

    checkAuth();
    logInForm.removeEventListener('submit', logIn);
  }

  logInForm.addEventListener('submit', logIn);
}

//Проверяем на правила авторизации
function checkAuth() {
  if(login) {
    authorized();
    modalAuth.classList.remove('is-open');
  } else {
    notAuthorized();
  }
}

checkAuth();






// day 2

function createCardRestaurant() {
  const card = `
          <a class="card card-restaurant">
            <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image"/>
            <div class="card-text">
             <div class="card-heading">
              <h3 class="card-title">Пицца плюс</h3>
              <span class="card-tag tag">50 мин</span>
             </div>
             <div class="card-info">
              <div class="rating">
               4.5
              </div>
              <div class="price">От 900 ₽</div>
              <div class="category">Пицца</div>
             </div>
            </div>
           </a>
        `;

  cardsRestaurants.insertAdjacentHTML('afterbegin', card);

}

createCardRestaurant();


function createCardGood() {
  const card = document.createElement('div');
  card.className = 'card';

  card.insertAdjacentHTML('beforeEnd', `
        <img src="img/pizza-plus/pizza-vesuvius.jpg" alt="image" class="card-image"/>
        <div class="card-text">
          <div class="card-heading">
            <h3 class="card-title card-title-reg">Пицца Везувий</h3>
          </div>
          <!-- /.card-heading -->
          <div class="card-info">
            <div class="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
              «Халапенье», соус «Тобаско», томаты.
            </div>
          </div>
          <!-- /.card-info -->
          <div class="card-buttons">
            <button class="button button-primary button-add-cart">
              <span class="button-card-text">В корзину</span>
              <span class="button-cart-svg"></span>
            </button>
            <strong class="card-price-bold">545 ₽</strong>
          </div>
        </div>
        <!-- /.card-text -->
  `);

  cardsMenu.insertAdjacentElement("beforeEnd", card);

}


function openGoods(e) {
  const target = e.target;
  const restaurant = target.closest('.card-restaurant');

  if(restaurant && login) {
    cardsMenu.textContent = '';
    containerPromo.classList.add('hide');
    restaurants.classList.add('hide');
    menu.classList.remove('hide');

    createCardGood();
  } else {
    toggleModalAuth();
  }
}

cardsRestaurants.addEventListener('click', openGoods);
document.querySelector('.logo').addEventListener('click', () => {
  containerPromo.classList.remove('hide');
  restaurants.classList.remove('hide');
  menu.classList.add('hide');
});