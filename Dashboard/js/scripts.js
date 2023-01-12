var manageBlog=document.querySelector("#blog-btn");
        function manageBlogFunc(){
            window.location.href="./index.html"

        }
        var manageBlog=document.querySelector("#contact-btn");
        

        function manageContactFunc(){
            window.location.href="./contact_me.html"
        }

        function manageLoginFunc(){
            window.location.href="./control_login.html"
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