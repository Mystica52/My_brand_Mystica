const loginForm = document.getElementById("loginForm");
const emailValue = document.getElementById("email");
const passwordValue = document.getElementById("psw");

path1 = "https://backendportifolio-production.up.railway.app/auth/login"
// function loginUser1() {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
    //   console.log("path1", path1);
      const login = await fetch(path1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          
          username: emailValue.value,
          password: passwordValue.value,
        }),
      });
      response = await login.json();
      console.log(response);
      console.log("logged in ")
      if (response?.message === "Login Successful!") {
        // alert('success');
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 10000,
        });
  
        Toast.fire({
          type: "success",
          title: `User login successfully.
                                  `,
        });
  
        document.getElementById("loginForm").reset();
        location.href = "./../../../my_potifolio/Dashboard/index.html";
      } else {
        alert("Error");
      }
    });
//   }