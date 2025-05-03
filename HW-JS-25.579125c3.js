const keys = [
    'a',
    's',
    'd',
    'f',
    'g',
    'h',
    'j',
    'k',
    'n',
    'q'
];
let currentKeyIndex = 0;
const keyElement = document.getElementById('key');
const statusElement = document.getElementById('status');
function setNewKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyElement.textContent = keys[currentKeyIndex];
    statusElement.textContent = "\u041D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u0443 \u043A\u043B\u0430\u0432\u0456\u0448\u0443!";
}
document.addEventListener('keydown', function(event) {
    const pressedKey = event.key.toLowerCase();
    if (pressedKey === keys[currentKeyIndex]) {
        PNotify.success({
            text: "\u041F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E!",
            delay: 1000
        });
        setNewKey();
    } else PNotify.error({
        text: `\u{41D}\u{435}\u{43F}\u{440}\u{430}\u{432}\u{438}\u{43B}\u{44C}\u{43D}\u{43E}! \u{412}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{443}\u{43B}\u{438} "${pressedKey}"`,
        delay: 1500
    });
});
document.addEventListener('keypress', function(event) {
    event.preventDefault();
});
document.getElementById('newGame').addEventListener('click', function() {
    setNewKey();
    PNotify.info({
        text: "\u041D\u043E\u0432\u0430 \u0433\u0440\u0430 \u0440\u043E\u0437\u043F\u043E\u0447\u0430\u0442\u0430!",
        delay: 1000
    });
});
setNewKey();
// 2
const chartData = {
    labels: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30"
    ],
    datasets: [
        {
            label: "\u041F\u0440\u043E\u0434\u0430\u0436\u0456 \u0437\u0430 \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u0439 \u043C\u0456\u0441\u044F\u0446\u044C",
            data: [
                150,
                220,
                180,
                200,
                250,
                300,
                280,
                350,
                400,
                380,
                420,
                450,
                500,
                550,
                600,
                650,
                700,
                750,
                800,
                850,
                900,
                950,
                1000,
                1050,
                1100,
                1150,
                1200,
                1250,
                1300,
                1350
            ],
            backgroundColor: "#2196f3",
            borderColor: "#2196f3",
            borderWidth: 2,
            fill: false,
            tension: 0.4
        }
    ]
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

//# sourceMappingURL=HW-JS-25.579125c3.js.map
