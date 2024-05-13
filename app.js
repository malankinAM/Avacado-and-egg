// Получаем элемент сердечка
var heart = document.getElementById('Heart');

// Добавляем слушатель события 'mouseover'
heart.addEventListener('mouseover', function() {
    // Останавливаем анимацию сердечка
    heart.style.animationPlayState = 'paused';
});

// Добавляем слушатель события 'mouseout'
heart.addEventListener('mouseout', function() {
    // Возобновляем анимацию сердечка
    heart.style.animationPlayState = 'running';
});
