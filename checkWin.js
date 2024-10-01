const winningCombinations = [ 
    [0, 1, 2], // Первая строка
    [3, 4, 5], // Вторая строка
    [6, 7, 8], // Третья строка
    [0, 3, 6], // Первый столбец
    [1, 4, 7], // Второй столбец
    [2, 5, 8], // Третий столбец
    [0, 4, 8], // Первая диагональ
    [2, 4, 6]  // Вторая диагональ
];

function checkForWin() {
    let isDraw = true;
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];

        // Проверяем победу для красных
        if (buttonsArray[a].style.backgroundColor === 'red' &&
            buttonsArray[b].style.backgroundColor === 'red' &&
            buttonsArray[c].style.backgroundColor === 'red') {
            gameActive = false;  // Останавливаем игру
            setTimeout(() => {setByeMessage("Игра окончена! Победили красные!");}, 200);
            return;  // Победа красных
        }

        // Проверяем победу для синих
        if (buttonsArray[a].style.backgroundColor === 'blue' &&
            buttonsArray[b].style.backgroundColor === 'blue' &&
            buttonsArray[c].style.backgroundColor === 'blue') {
            gameActive = false;  // Останавливаем игру
            setTimeout(() => {setByeMessage("Игра окончена! Победили синие!");}, 200);
            return;  // Победа синих
        }
    }

        // Проверяем, все ли клетки заполнены
        buttonsArray.forEach(button => {
            if (button.style.backgroundColor === '') {
                isDraw = false;  // Если есть незаполненные клетки, не ничья
            }
        });
    
        // Если все клетки заполнены и нет победителя, значит ничья
        if (isDraw) {
            gameActive = false;  // Останавливаем игру
            setTimeout(() => {setByeMessage("Игра окончена! Ничья!");}, 200);
        }
    }

    function setByeMessage(message) {
        document.getElementById('bye-message').innerText = message; // Устанавливаем текст сообщения
        document.getElementById('bye-box').style.display = 'flex'; // Показываем bye-box
        // document.getElementById('operator_number').style.display = 'none'; // Скрываем игровое поле
    }


    document.getElementById('bye-button').addEventListener('click', function() {
        resetGame(); // Ваша функция для сброса игры
        document.getElementById('bye-box').style.display = 'none'; // Скрываем bye-box
        document.getElementById('operator_number').style.display = 'grid'; // Показываем игровое поле
    });

    function resetGame() {
        buttonsArray.forEach(button => {
            button.style.backgroundColor = ''; // Сброс цвета кнопок
        });
        usedIndexes = [];
        usedIndexesPlayer = [];
        gameActive = true; // Активируем игру
        // Здесь можно добавить другие необходимые действия для сброса состояния игры
    }



// function checkForWin() {
//     for (const combination of winningCombinations) {
//         if (combination.every(index => usedIndexesPlayer.includes(index))) {
//             gameActive = false; // Останавливаем игру
//             setTimeout(() => {
//                 alert("Игра окончена! Победили синие!"); // Всплывающее окно
//              }, 100);
//             return;
//         }
//     }
    
//     // Проверка на победу для компьютера
//     for (const combination of winningCombinations) {
//         if (combination.every(index => usedIndexes.includes(index))) {
//             gameActive = false; // Останавливаем игру
//                        setTimeout(() => {
//               alert("Игра окончена! Победили синие!"); // Всплывающее окно
//            }, 100);
//             return;
//             }
//         }
//     }