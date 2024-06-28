const container =document.querySelector('.container');
const loginlink =document.querySelector('.login-link');
const registrationlink =document.querySelector('.registration-link');
const btnpopup=document.querySelector('.btnlogin')
const iconclose=document.querySelector('.close-icon')

registrationlink.addEventListener('click',()=>{
    container.classList.add('active');
});

loginlink.addEventListener('click',()=>{
    container.classList.remove('active');
});

btnpopup.addEventListener('click',()=>{
    container.classList.add('active-popup');
});

iconclose.addEventListener('click',()=>{
    container.classList.remove('active-popup');
});

document.getElementById("mycheck").required = true;