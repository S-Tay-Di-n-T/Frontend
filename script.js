let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let navbar = document.querySelector('.navbar');

let formSu = document.querySelector('#signup-btn');
let signupForm = document.querySelector('.signup-form-container');
let formCl = document.querySelector('#form-cl');


formSu.addEventListener('click', () =>{
    signupForm.classList.add('active');
});

window.onscroll = () =>{
    navbar.classList.remove('active');
    signupForm.classList.remove('active');
}

formCl.addEventListener('click', () =>{
    signupForm.classList.remove('active');
});


window.onscroll = () =>{
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
