const url =" http://localhost:3000/messages";
const contactTable = document.getElementById('contact-table')
const blogsId=[];
let i = 0;
const rendMessagesD = (posts) => {
  console.log("hello", posts);
  posts.forEach((msg) => {
    // console.log(msg._id)
    contactTable.innerHTML += `
        <tr >
        <div id= "${msg._id}">
            <td>${i + 1}</td>
            <td>${msg.name}</td>
            <td>${msg.address}</td>
            <td>${msg.message}</td>
             <td>
            
                <button class="delete-button" id = "delete-button" onclick= "deleteBlog('${
                  msg._id
                }')" >
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
// console.log(posts)
fetch(url)
  .then((res) => res.json())
  .then((data) => rendMessagesD(data));

//delete blog
function deleteBlog(id) {
  document.getElementById("delete-button").addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("hello")
    const url2 = `http://localhost:3000/messages/delete/${id}`;
    console.log("url", url2);
    fetch(url2, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    }).then(function (res) {
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

      //   renderBlogsD();
      location.reload();
    });
  });
}


