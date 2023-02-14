var imgPrevw=document.getElementById("img-prevw")
var CLOUDINARY_URL ='https://api.cloudinary.com/v1_1/dddf3qeth/upload'
var CLOUDINARY_UPLOAD_PRESET = 'bltstveh'
let img_uploaded;
const imageVal = document.getElementById("imge");
function updateBlogFunc(id) {

    imageVal.addEventListener("change", function(e){
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
          img_uploaded=res.data.secure_url
         }).catch(function(err){
          console.log(err)
         })
      })
  //we must to use JSON.parse, because data as string, we need convert to array
  blogItem = JSON.parse(localStorage.getItem("blogItem")) ?? [];
  blogItem.forEach(function (value) {
    if (value._id == id) {
      (document.getElementById("ttle").value = value.title),
        // (document.getElementById("image").value =this.state.image),
        (document.getElementById("descrption").value = value.description);
    }
  });
  editBlogModal.style.display = "flex";
  const editForm = document.getElementById("editBlog")
  const eTitleValue = document.getElementById("ttle");
// const imageValue = document.getElementById("image");
const eDescriptionValue = document.getElementById("descrption");
  
  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstData = {
      title: eTitleValue.value,
      image: img_uploaded,
      description: eDescriptionValue.value,
    };
//   console.log(titleValue.value)

  const url5 = `https://backendportifolio-production.up.railway.app/posts/update/${id}`;
  fetch(url5, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(firstData),
  }).then(function (res) {
    console.log(res.json())
     editForm.reset()
        location.reload();
  });
});


}

var editBlogModal = document.querySelector(".edit-blog-modal");
var closeBlogModal = document.querySelector("#close-blog-modal");
function blogModalFunc() {
  editBlogModal.style.display = "flex";
}
closeBlogModal.addEventListener("click", closeBlogModalFunc);
function closeBlogModalFunc() {
  editBlogModal.style.display = "none";
}

window.addEventListener("click", outsideClickBlogModal);
function outsideClickBlogModal(e) {
  if (e.target == editBlogModal) {
    editBlogModal.style.display = "none";
  }
}
