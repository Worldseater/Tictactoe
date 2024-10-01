document.getElementById('start-button').addEventListener('click', function() {
    // Скрываем приветственное меню
    document.getElementById('welcome-box').style.display = 'none';
    
    // Отображаем игровое поле
    document.getElementById('game-board').style.display = 'block';
    
    // Начинаем игру (если нужно запустить какие-то функции)
    startGame();  // Можно вызвать функцию, которая инициализирует игру
});

function startGame() {
  // Логика начала игры
  gameActive = true; // Перезапускаем игру
  // Например, очищаем поле и сбрасываем переменные
}


