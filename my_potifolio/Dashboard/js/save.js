const input=document.getElementById('image')
var blogImage=[]
input.addEventListener('change', (event)=>{
    const image=event.target.files[0]
    const reader=new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load', ()=>{
        blogImage.push(reader.result)
    })
} )
console.log(blogImage)
//method to save data into localstorage
function saveBlog(){


    //get data from localstorage and store to bloglist array
    //we must to use JSON.parse, because data as string, we need convert to array
    blogList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //get last array to get last idq
    //and store it into variable id
    var id
    blogList.length != 0 ? blogList.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

        //edit blogList array based on value
        blogList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.title      = document.getElementById('title').value,
                value.image     = blogImage[0],
                value.readMore     = document.getElementById('readMore').value
            }
        });

        //remove hidden input
        document.getElementById('id').value = ''

    }else{

        //save
        //get data from form
        var item = {
            id        : id + 1,
            title     : document.getElementById('title').value,
            image       : blogImage[0],
            readMore      : document.getElementById('readMore').value
        }

        //add item data to array blogList
        blogList.push(item)
    }

    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(blogList))

    //update table list
    allBlogData()


}






