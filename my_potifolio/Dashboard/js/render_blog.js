function allBlogData(){
    const div = document.getElementById('blog-data')
            
    div.innerHTML = ''
    //get data from localstorage and store to bloglist array
    //we must to use JSON.parse, because data as string, we need convert to array
    blogList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //looping data and show data in table
    blogList.forEach(function (value, i){

        div.innerHTML += `
        <div class="Blog-card">
            <img src='${value.image}'/>
            <p>education is important in our life.so let mantain education
            </p>
            <a href="https://www.worldvision.ca/stories/education/why-is-education-important">Read more</a>
         </div>`
    })
}