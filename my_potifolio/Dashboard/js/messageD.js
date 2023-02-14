const url =" https://backendportifolio-production.up.railway.app/messages";
const contactTable = document.getElementById('contact-table')
const blogsId=[];
let i = 0;
const rendMessagesD = (messages) => {
  console.log("hello", messages);
  messages.forEach((msg) => {
    // console.log(msg._id)
    contactTable.innerHTML += `
        <tr >
        <div id= "${msg._id}">
            <td>${i + 1}</td>
            <td>${msg.name}</td>
            <td>${msg.address}</td>
            <td>${msg.message}</td>
             <td>
            
                <button class="delete-button" id = "delete-btn" onclick= "deleteMessage('${msg._id}')" >
                    <i class="fa fa-trash"></i>
                </button>
            
            </td>
        </div>

        </tr>`;
        i++;
        
    

    // console.log(msg)
  });
};
// console.log("messageId",blogsId);
// console.log(messages)
fetch(url)
  .then((res) => res.json())
  .then((data) => rendMessagesD(data));


  
//delete blog
function deleteMessage(id) {
  // document.getElementById("delete-btn").addEventListener("click", (e) => {
    // e.preventDefault();
    console.log("hello", id)
    const url2 = `https://backendportifolio-production.up.railway.app/messages/delete/${id}`;
    console.log("url", url2);
    fetch(url2, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    })
    .then(function (res) {
      console.log("acknowledged", res.status);

      if (res.status == 200) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 10000,
        });

        Toast.fire({
          type: "success",
          title: `message deleted successfully.
                                            `,
        });
      } else {
        alert("error");
      }

        // renderMessageD();
      location.reload();
    });
  // });
}


