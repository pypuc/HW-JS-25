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


// 2


import Chart from 'chart.js/auto';
const chartData = {
  labels: [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380,
        420, 450, 500, 550, 600, 650, 700, 750, 800, 850,
        900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 2,
      fill: false,
      tension: 0.4
    },
  ],
};

const ctx = document.getElementById('sales-chart').getContext('2d');
const salesChart = new Chart(ctx, {
  type: 'line',
  data: chartData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

