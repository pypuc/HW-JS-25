const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'n', 'q'];
let currentKeyIndex = 0;

const keyElement = document.getElementById('key');
const statusElement = document.getElementById('status');

function setNewKey() {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyElement.textContent = keys[currentKeyIndex];
  statusElement.textContent = "Натисніть правильну клавішу!";
}

document.addEventListener('keydown', function (event) {
  const pressedKey = event.key.toLowerCase();

  if (pressedKey === keys[currentKeyIndex]) {
    PNotify.success({
      text: 'Правильно!',
      delay: 1000
    });
    setNewKey();
  } else {
    PNotify.error({
      text: `Неправильно! Ви натиснули "${pressedKey}"`,
      delay: 1500
    });
  }
});

document.addEventListener('keypress', function (event) {
  event.preventDefault();
});

document.getElementById('newGame').addEventListener('click', function () {
  setNewKey();
  PNotify.info({
    text: 'Нова гра розпочата!',
    delay: 1000
  });
});

setNewKey();
