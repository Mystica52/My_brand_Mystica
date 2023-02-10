const blogList=document.getElementById('blog-data')

let output='';


const url ="http://localhost:3000/posts/blogs";


let renderBlogsP=(posts)=>{
    posts.forEach(post => {
        output+=`
        <div class="Blog-card">

        <div class="blog-image" id="image"><img src="${post.image}"/>
        </div>
        <h2 id="title">${post.title}</h2>
        <p id="description">${post.description}</p>
    
    </div>`

    // console.log(post)
    });

    blogList.innerHTML=output;
}

fetch(url)
.then(res => res.json())
.then(data =>renderBlogsP(data))