//method to get detail personal data based on id
var blogModal= document.querySelector(".create-blog-modal");
function updateBlogFunc(id){
   // console.log(id);
   blogList = JSON.parse(localStorage.getItem('listItem')) ?? []

    blogList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('title').value = value.title
           document.getElementById('author').value = value.author
        }
    })
    blogModal.style.display = "flex";
}





