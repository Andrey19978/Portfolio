// Получаем элементы
const registerBtn = document.getElementById('registerBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];
const registrationForm = document.getElementById('registrationForm');

// Открытие модального окна
registerBtn.onclick = function() {
    modal.style.display = "block";
}

// Закрытие модального окна
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Обработка формы регистрации
registrationForm.onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем отправку формы
    try {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            throw new Error("Поле пустое, введи данные");
        }

        // Здесь можно добавить логику для регистрации пользователя
        alert("Регистрация успешна!");

        // Закрытие модального окна после успешной регистрации
        modal.style.display = "none";
    } catch (error) {
        alert(error.message);
    }
}