const addBlogForm = document.getElementById("addBlog");
const tableBlog = document.getElementById("table");

const deleteButton = document.getElementById("delete-button");
const editButton = document.getElementById("edit-blog");

const titleValue = document.getElementById("title");
const imageValue = document.getElementById("image");
const descriptionValue = document.getElementById("description");

const url = "http://localhost:3000/posts/blogs";


const blogsId=[];
let i = 0;
const renderBlogsD = (posts) => {
  console.log("hello", posts);
  posts.forEach((post) => {
    // console.log(post._id)
    table.innerHTML += `
        <tr >
        <div id= "${post._id}">
            <td>${i + 1}</td>
            <td>${post.title}</td>
            <td><div class="blog-image"><img src="${post.image}"/>
            </div></td>
            <td>${post.description}</td>

            <td>
                <button  id="edit-blog" onclick = "updateBlogFunc(editBlog('${post._id}'))" >
                    <i class="fa fa-edit"></i>
                </button>
            </td>

            <td>
            
                <button class="delete-button" id = "delete-button" onclick= "deleteBlog('${
                  post._id
                }')" >
                    <i class="fa fa-trash"></i>
                </button>
            
            </td>
        </div>

        </tr>`;
        i++;
        blogsId.push(post._id)
    

    // console.log(post)
  });
};
console.log("blogsId",blogsId);
// console.log(posts)
fetch(url)
  .then((res) => res.json())
  .then((data) => renderBlogsD(data));

//delete blog
function deleteBlog(id) {
  document.getElementById("delete-button").addEventListener("click", (e) => {
    e.preventDefault();
    // console.log("hello")
    const url2 = `http://localhost:3000/posts/delete/${id}`;
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
          title: `Blog deleted successfully.
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

function editBlog(id) {
  console.log("idedit", id);
  document.getElementById("edit-blog").addEventListener("click", (e) => {
    e.preventDefault();
    
     titleValue.textContent=document.getElementById('');
     document.getElementById("image").value;
     document.getElementById("description").value;
    console.log("object", title1, description);
    const url3 = `http://localhost:3000/posts/${id}`;
    console.log("url", url3);
    fetch(url3, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    }).then(function (res) {
      console.log("acknowledged", res.status);
    });
  });
  return id;
}



const path = "http://localhost:3000/posts/createBlog";

addBlogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log(nameValue.value)
  fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titleValue.value,
      image: imageValue.value,
      description: descriptionValue.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const dataArr = [];
      dataArr.push(data);
      renderBlogsD(dataArr);
    });

  // )
});

//edit blog

function updateBlogFunc(id) {
  const url5 = `http://localhost:3000/posts/update/${id}`;
  fetch(url5, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(function (res) {
    console.log(res.json());
  });

  console.log("157", id);

  blogModal.style.display = "flex";
  
}


var blogModal= document.querySelector(".create-blog-modal");
        var closeBlogModal= document.querySelector("#close-blog-modal");
       function blogModalFunc(){
        blogModal.style.display = "flex";
        }
        closeBlogModal.addEventListener("click", closeBlogModalFunc);
        function closeBlogModalFunc(){
            blogModal.style.display = "none";
        }

        window.addEventListener("click", outsideClickBlogModal);
        function outsideClickBlogModal(e){
            if(e.target == blogModal){
                blogModal.style.display = "none";
            }
        }