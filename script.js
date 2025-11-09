// assets/js/script.js

$(document).ready(function() {
    
    // 1. JavaScript Functionality: Form Validation on contact.html
    const form = document.getElementById('enrollmentForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            // Проверка валидности формы
            if (!form.checkValidity()) {
                event.preventDefault(); // Предотвратить отправку
                event.stopPropagation();
            } else {
                event.preventDefault(); 
                handleFormSubmission();
            }
            // Добавить класс для отображения сообщений валидации
            form.classList.add('was-validated');
        }, false);
    }
    
    function handleFormSubmission() {
        // 2. jQuery Effect/Animation: SlideUp and FadeIn
        // Плавно скрываем форму и показываем сообщение об успехе
        $('#enrollmentForm').slideUp(800, function() {
            $('#successMessage').fadeIn(1000);
            
            // Очистка полей (для демонстрации)
            form.reset();
            form.classList.remove('was-validated');
        });
    }

    // 3. jQuery Effect: Animate для карточек успеха (на success.html)
    // Делаем карточки плавно появляющимися при загрузке страницы
    $('.stat-card').css('opacity', 0); // Скрываем вначале

    // Используем animate для плавного появления
    $('.stat-card').each(function(index) {
        // Задержка для последовательного появления
        $(this).delay(300 * index).animate({ 'opacity': '1', 'top': '0px' }, 600);
    });

    // 4. Интерактивный компонент: Карусель для отзывов (на success.html)
    // Инициализация карусели (Bootstrap JS)
    // Не требует дополнительного кода, если используется bootstrap.bundle.min.js
});
