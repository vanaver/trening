const logo = document.querySelector('.logo'); // Получаем первый элемент с классом "logo"
const body = document.body; // `document.body` уже ссылается на <body>, не нужен getElementsByTagName
const card = document.querySelectorAll('.card') // там 3 карты, 3 элемента


logo.onclick = () => {
    let bg = getComputedStyle(body).backgroundImage;
    if(bg !== 'none') {
        body.style.background = 'none'
        body.style.backgroundColor = 'darkcyan';
        card.forEach((singleCard) => {
            singleCard.style.backgroundColor = 'blue';
            singleCard.style.color = '#7FFFD4';
        })
    } else {
        body.style.background = '';
        body.style.backgroundAttachment = '';
        card.forEach((singleCard) => {
            singleCard.style.backgroundColor = ''; // Возвращаем значение по умолчанию
            singleCard.style.color = ''; // Возвращаем значение по умолчанию
        });
    }
}

const button = document.querySelector('#button3');
const apiKey = '7ab0271ba4c32900ec7f129eb7dd3c99';
const resultmenu = document.querySelector('.response');

button.onclick = async () => {
    event.preventDefault();
    const city = document.querySelector('#town').value.trim();
    if(!city) {
        resultmenu.innerHTML = 'Введи город выше'
        return;
    }
    try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`);
    if(!response.ok){
        throw new Error('Город не найден');
    }
    const data = await response.json();
    const temp = Math.round(data.main.temp);
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;
    resultmenu.innerHTML = `<p>Температура: ${temp}°C</p>
    <p>${desc}</p>
    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather icon">`;
} catch (error) {
    resultmenu.innerHTML = `<p style="color:red;">Ошибка: ${error.message}</p>`;
}
};

