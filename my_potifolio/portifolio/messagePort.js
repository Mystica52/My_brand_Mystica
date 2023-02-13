

const addMessageForm = document.getElementById('contact-me-form')
const nameValue=document.getElementById('name');
const addressValue=document.getElementById('address');
const messageValue=document.getElementById('message');
const path= "https://backendportifolio-production.up.railway.app/messages/createMessage"
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

// addMessageForm.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     console.log(nameValue.value)
//     fetch(path,{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({
//             name:nameValue.value,
//             address:addressValue.value,
//             message:messageValue.value
//         })
//     })
//     .then(res =>res.json())
//     .then(res =>{
//         if (res.status == 200) {
//             const Toast = Swal.mixin({
//               toast: true,
//               position: "top-end",
//               showConfirmButton: false,
//               timer: 10000,
//             });
    
//             Toast.fire({
//               type: "success",
//               title: `message sent successfully.
//                                                 `,
//             });
//           } else {
//             alert("error");
//           }
    
//             // renderMessageD();
//           location.reload()
//         // .then()
    
            
//         // )
//     }) 

   

// })


function addMessage() {
    addMessageForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      console.log(nameValue.value);
      const Message = await fetch(path, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name:nameValue.value,
            address:addressValue.value,
            message:messageValue.value
        }),
      });
      response = await Message.json();
      console.log(response);
      if (response?.message === "message sent successfully") {
        // alert('success');
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
        });
  
        Toast.fire({
          type: "success",
          title: `Message sent successfully.
                                  `,
        });
        document.getElementById("contact-me-form").reset();
        // location.reload()
      } else {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
          });
    
          Toast.fire({
            type: "error",
            title: `enter all input.
                                    `,
          });
      }
    });
  }
  
  addMessage();