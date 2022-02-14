const contactForm = document.querySelector('.contact-form');


let firstName = document.getElementById('fname');
let lastName = document.getElementById('lname');
let phoneNum = document.getElementById('phonenum');
let emailAddr = document.getElementById('emailaddr');


contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let formData = {
        firstName : firstName.value,
        lastName : lastName.value,
        phoneNum : phoneNum.value,
        emailAddr : emailAddr.value
    };
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText== 'success') {
            alert('Email Sent');
            firstName.value = '';
            lastName.value = '';
            phoneNum.value = '';
            emailAddr.value = '';
        } else {
            alert('something went wrong');
        }
    }
    xhr.send(JSON.stringify(formData));
})