document.addEventListener("DOMContentLoaded", () => {
    let current = 'login';
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const switchBox = document.getElementById('switchBox');
    const login = document.getElementById('loginWrapper');
    const signup = document.getElementById('signupWrapper');

    loginBtn.addEventListener('click', () => {
        if(current === 'signup'){
            switchBox.style.transform = "translateX(0)";
            loginBtn.style.color = '#000';
            loginBtn.style.opacity = '1';
            signupBtn.style.color = '#fff';
            signupBtn.style.opacity = '0.5';
            login.style.display = 'block';
            signup.style.display = 'none';
            current = 'login';
        }
    });
    signupBtn.addEventListener('click', () => {
        if(current === 'login'){
            switchBox.style.transform = "translateX(100%)";
            loginBtn.style.color = '#fff';
            loginBtn.style.opacity = '0.5';
            signupBtn.style.color = '#000';
            signupBtn.style.opacity = '1';
            login.style.display = 'none';
            signup.style.display = 'block';
            current = 'signup';
        }
    });
});