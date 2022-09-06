function register(){
    var name = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var birth =document.getElementById('date').value;
   

    localStorage.setItem('name1',name)
    localStorage.setItem('surname',lastname)
    localStorage.setItem('email1',email)
    localStorage.setItem('key',password)
    localStorage.setItem('date',birth)
}


function login(){
    var email = document.getElementById('Email').value;
    var password = document.getElementById('Password').value;


    var email1 = localStorage.getItem('email1');
    var password1 = localStorage.getItem('key')

    if(email == email1 && password == password1){
        localStorage.setItem('code', 'secret');
        window.location.href = "home.html";

    }
    else{
        alert('email and password is incorrect')
    }}