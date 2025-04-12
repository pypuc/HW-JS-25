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

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("sales-chart").getContext("2d");

  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => `${i + 1}`),
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [
          150, 220, 180, 200, 250, 300, 280, 350, 400, 380,
          420, 450, 500, 550, 600, 650, 700, 750, 800, 850,
          900, 950, 1000, 1050, 1100, 1150, 1200, 1250, 1300, 1350
        ],
        backgroundColor: "rgba(33, 150, 243, 0.2)",
        borderColor: "#2196f3",
        borderWidth: 2,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const config = {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: "top" },
        tooltip: { mode: "index", intersect: false },
      },
      interaction: { mode: "nearest", axis: "x", intersect: false },
      scales: {
        x: { title: { display: true, text: "День місяця" } },
        y: { title: { display: true, text: "Кількість продажів" }, beginAtZero: true },
      },
    },
  };

  new Chart(ctx, config);
});
