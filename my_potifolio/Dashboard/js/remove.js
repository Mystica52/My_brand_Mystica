//remove the  blog data   by id
function removeBlogData(id){
    //get data from localstorage and store to bloglist array
    //we must to use JSON.parse, because data as string, we need convert to array
    blogList = JSON.parse(localStorage.getItem('listItem')) ?? []

    blogList = blogList.filter(function(value){ 
        return value.id != id; 
    });

    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(blogList))

    //get data again
    allBlogData()
}



//remove the  contact data   by id
function removeContactData(id){
    

    //get data again
    allContactData()
}



function removeLoginData(id){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    loginList = JSON.parse(localStorage.getItem('loginItem')) ?? []

    loginList = loginList.filter(function(value){ 
        return value.id != id; 
    });

    // save array into localstorage
    localStorage.setItem('loginItem', JSON.stringify(loginList))

    //get data again
    allLoginData();
}
