document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        
        // Логика для регистрации пользователя
        // Например, отправка данных на сервер
        console.log('Регистрация:', username, password);

        alert('Регистрация успешна!');
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        
        // Логика для авторизации пользователя
        // Например, проверка данных с сервером
        console.log('Авторизация:', username, password);

        alert('Авторизация успешна!');
    });
});
