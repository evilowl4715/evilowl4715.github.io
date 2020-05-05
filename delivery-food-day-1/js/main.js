const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

// day 1

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginInput = document.querySelector('#login');
const logInForm = document.querySelector('#logInForm');
const labelAuth = document.querySelector('.label-auth span');
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
let login = localStorage.getItem('gloDelivery');


closeAuth.addEventListener('click', toggleModalAuth);
buttonAuth.addEventListener('click', toggleModalAuth);


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