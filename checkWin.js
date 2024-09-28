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
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];

        // Проверяем победу для красных
        if (buttonsArray[a].style.backgroundColor === 'red' &&
            buttonsArray[b].style.backgroundColor === 'red' &&
            buttonsArray[c].style.backgroundColor === 'red') {
            gameActive = false;  // Останавливаем игру
            setTimeout(() => {
                alert("Игра окончена! Победили красные!"); // Всплывающее окно
            }, 100);
            return;  // Победа красных
        }

        // Проверяем победу для синих
        if (buttonsArray[a].style.backgroundColor === 'blue' &&
            buttonsArray[b].style.backgroundColor === 'blue' &&
            buttonsArray[c].style.backgroundColor === 'blue') {
            gameActive = false;  // Останавливаем игру
            setTimeout(() => {
                alert("Игра окончена! Победили синие!"); // Всплывающее окно
            }, 100);
            return;  // Победа синих
        }
    }
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