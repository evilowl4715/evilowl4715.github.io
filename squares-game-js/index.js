var $start = document.querySelector('#start');
var $game = document.querySelector('#game');
var $time = document.querySelector('#time');
var $timeHeader = document.querySelector('#time-header');
var $resultHeader = document.querySelector('#result-header');
var $result = document.querySelector('#result');
var $gameTime = document.querySelector('#game-time');

var score = 0;
var isGameStart = false;

$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);
$gameTime.addEventListener('input', setGameTime);

function show($el) {
  $el.classList.remove('hide');
}

function hide($el) {
  $el.classList.add('hide');
}

function startGame() {
  score = 0;
  isGameStart = true;
  $gameTime.setAttribute('disabled', 'true');
  hide($start);
  $game.style.backgroundColor = '#fff';
  setGameTime();

  var interval = setInterval(function () {
    var time = parseFloat($time.textContent);

    if (time <= 0) {
      clearInterval(interval);
      endGame();
    } else {
      $time.textContent = (time - 0.1).toFixed(1);
    }
  }, 100);

  renderBox();
}

function setGameTime() {
  show($timeHeader);
  hide($resultHeader);
  var time = +$gameTime.value;
  $time.textContent = time.toFixed(1);
}

function endGame() {
  isGameStart = false;
  $gameTime.removeAttribute('disabled');
  show($start);
  $game.style.backgroundColor = '#ccc';
  $game.innerHTML = '';
  hide($timeHeader);
  show($resultHeader);
  $result.textContent = score.toString();
}

function handleBoxClick(event) {
  if (!isGameStart) {
    return
  }
  if (event.target.dataset.box) {
    score++;
    renderBox();
  }
}

function renderBox() {
  $game.innerHTML = '';
  var box = document.createElement('div');
  var boxSize = getRandom(30, 100);
  var gameSize = $game.getBoundingClientRect();
  var maxTop = gameSize.height - boxSize;
  var maxLeft = gameSize.width - boxSize;

  box.style.height = box.style.width = boxSize + 'px';
  box.style.position = 'absolute';
  box.style.backgroundColor = getRandomColor();
  box.style.top = getRandom(0, maxTop) + 'px';
  box.style.left = getRandom(0, maxLeft) + 'px';
  box.style.cursor = 'pointer';
  box.setAttribute('data-box', 'true');

  $game.insertAdjacentElement('afterbegin', box);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
