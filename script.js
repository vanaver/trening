const logo = document.querySelector('.logo'); // Получаем первый элемент с классом "logo"
const body = document.body; // `document.body` уже ссылается на <body>, не нужен getElementsByTagName
const card = document.querySelectorAll('.card') // там 3 карты, 3 элемента
console.log(card)


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

