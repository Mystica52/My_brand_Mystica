const addBlogForm = document.getElementById("addBlog");
const tableBlog = document.getElementById("table");

const deleteButton = document.getElementById("delete-button");
const editButton = document.getElementById("edit-blog");

const titleValue = document.getElementById("title");
const imageValue = document.getElementById("image");
const descriptionValue = document.getElementById("description");

var imgPreview=document.getElementById("img-preview")
var CLOUDINARY_URL ='https://api.cloudinary.com/v1_1/dddf3qeth/upload'
var CLOUDINARY_UPLOAD_PRESET = 'bltstveh'
let img_upload


const url = "https://backendportifolio-production.up.railway.app/posts/blogs";


const blogsId=[];
let i = 0;
const renderBlogsD = (posts) => {
  localStorage.setItem("blogItem",JSON.stringify(posts));
  posts.forEach((post) => {
    // console.log(post._id)
    table.innerHTML += `
        <tr >
        <div>
            <td>${i + 1}</td>
            <td>${post.title}</td>
            <td><div class="blog-image"><img src="${post.image}"/>
            </div></td>
            <td>${post.description}</td>

            <td>
                <button  id="edit-blog" onclick = "updateBlogFunc('${post._id}')" >
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
        // blogsId.push(post._id)
    

    // console.log(post)
  })
};
console.log("blogsId",blogsId);
// console.log(posts)
fetch(url)
  .then((res) => res.json())
  .then((data) => renderBlogsD(data))
  

//delete blog
function deleteBlog(id) {
  // document.getElementById("delete-button").addEventListener("click", (e) => {
    // e.preventDefault();

    console.log("hello", id)
    const url2 = `https://backendportifolio-production.up.railway.app/posts/delete/${id}`;
     fetch(url2,  {
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
  // });
}

//upload image on cloudinary

imageValue.addEventListener("change", function(e){
  var file = e.target.files[0];
  var formData= new FormData();
  formData.append('file',file);
  formData.append('upload_preset',CLOUDINARY_UPLOAD_PRESET);
   axios({
    url:CLOUDINARY_URL,
    method:'POST',
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data:formData
   }).then(function(res){
    console.log(res);
    img_upload=res.data.secure_url
   }).catch(function(err){
    console.log(err)
   })
})





const path = "https://backendportifolio-production.up.railway.app/posts/createBlog";

addBlogForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(titleValue.value)
  console.log(descriptionValue.value)

const data={
  title: titleValue.value,
  image: img_upload,
  description: descriptionValue.value
 }
//  console.log (data)
  fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const dataArr = [];
      dataArr.push(data);
      renderBlogsD(dataArr);
      location.reload();
    }).catch(error =>{
      console.log(error)
    })
    blogModal.style.display = "flex";

  // )
});

//edit blog




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
    



       