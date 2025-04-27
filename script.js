const cards = [
    {
        question: "Что такое алгоритм?",
        answer: "Последовательность действий для решения задачи."
    },
    {
        question: "Что такое переменная в программировании?",
        answer: "Именованная область памяти для хранения данных."
    },
    {
        question: "Что такое массив?",
        answer: "Структура данных, представляющая собой коллекцию элементов одного типа."
    },
    {
        question: "Что такое цикл?",
        answer: "Конструкция для многократного выполнения блока кода."
    },
    {
        question: "Что такое условный оператор?",
        answer: "Команда, которая выполняется, если выполняется заданное условие."
    },
    {
        question: "Что такое компилятор?",
        answer: "Программа, которая переводит исходный код в исполняемый файл."
    },
    {
        question: "Что такое функция?",
        answer: "Блок кода, выполняющий определённую задачу и вызываемый по имени."
    },
    {
        question: "Что такое база данных?",
        answer: "Организованная коллекция данных, которую можно легко обрабатывать."
    },
    {
        question: "Что такое кодирование информации?",
        answer: "Представление информации в виде символов или сигналов."
    },
    {
        question: "Что такое IP-адрес?",
        answer: "Уникальный адрес устройства в сети."
    }
];

let currentCard = 0;
const card = document.getElementById('card');
const cardFront = document.getElementById('card-front');
const cardBack = document.getElementById('card-back');
const counter = document.getElementById('counter');

function showCard(index) {
    cardFront.textContent = cards[index].question;
    cardBack.textContent = cards[index].answer;
    counter.textContent = `Карточка ${index + 1} из ${cards.length}`;
}

function flipCard() {
    card.classList.toggle('flipped');
}

function nextCard() {
    currentCard = (currentCard + 1) % cards.length;
    card.classList.remove('flipped');
    card.classList.add('fade');
    showCard(currentCard);
    setTimeout(() => card.classList.remove('fade'), 600);
}

function prevCard() {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    card.classList.remove('flipped');
    card.classList.add('fade');
    showCard(currentCard);
    setTimeout(() => card.classList.remove('fade'), 600);
}

showCard(currentCard);