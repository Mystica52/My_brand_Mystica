

const addMessageForm = document.getElementById('contact-me-form')
const nameValue=document.getElementById('name');
const addressValue=document.getElementById('address');
const messageValue=document.getElementById('message');
const path= "http://localhost:3000/messages/createMessage"
const div = document.getElementById('success')



//get request

// fetch(path)
// .then(res =>res.json())
// .then(data =>{
//     data.forEach(post=> {
//         console.log(post)
//     });
// })

//create insert new message

addMessageForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(nameValue.value)
    fetch(path,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:nameValue.value,
            address:addressValue.value,
            message:messageValue.value
        })
    })
    .then(res =>res.json())
    // .then()

        
    // )

})