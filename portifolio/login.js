const form= document.getElementById('form');
const username=document.getElementById('uname');
const email=document.getElementById('email');
const password=document.getElementById('psw');


form.addEventListener('submit', e =>{
e.preventDefault();

validateInputs();
});

const setError= (element, message) =>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess= element =>{
    const inputControl=element.parentElement;
    const errorDisplay= inputControl.querySelector('.error');

    errorDisplay.innerText='';

    errorDisplay.innerText = message;
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}


const isValidEmail= email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



const validateInputs =() =>{
    const usernameValue=username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue =password.value.trim();

    if (usernameValue===''){
        setError(username, 'username is required')

    }
    else{
        setSuccess(username);
    }

    if(emailValue ===''){
        setError(email, 'email is required');
    }
    else if(!isValidEmail(emailValue)){
        setError(email, 'provide a valid email address');
    }

    else{
        setSuccess(email);
    }

    if (passwordValue===''){
        setError(password, 'username is required')

    }
    else{
        setSuccess(username);
    }

    if(passwordValue ===''){
        setError(email, 'email is required');
    }
    else if(passwordValue.length<8){
        setError(password, 'Password must be 8 character.');
    }

    else{
        setSuccess(password);
    }
};