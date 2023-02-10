const addUserForm = document.getElementById("form");


const nameValue = document.getElementById("uname");
const emailValue = document.getElementById("email");
const passwordValue = document.getElementById("psw");
const path = "http://localhost:3000/auth";
const div = document.getElementById("success");

function addUser1() {
  addUserForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(nameValue.value);
    const signUP = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameValue.value,
        email: emailValue.value,
        password: passwordValue.value,
      }),
    });
    response = await signUP.json();
    console.log(response);
    if (response?.message === "user added successfully") {
      // alert('success');
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 10000,
      });

      Toast.fire({
        type: "success",
        title: `User added successfully.
                                `,
      });

      document.getElementById("form").reset();
      location.href = "./../../../my_potifolio/portifolio/login.html";
    } else {
      alert("Error");
    }
  });
}

addUser1();


//create insert new message

// async function addUser1() {

//         try {
//             const SignUp = await fetch("http://localhost:3000/auth",{
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     name:nameValue.value,
//                     email:emailValue.value,
//                     password:passwordValue.value

//                 }),
//             });

//             const response = await SignUp.json();
//             console.log(response);
//             if (response?.success == "true") {
//                 alert('success');
//             }
//             else {
//                 alert('Error');
//             }
//         } catch (error) {
//             alert(error)
//         }
//     }

