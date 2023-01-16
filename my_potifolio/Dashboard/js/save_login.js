

//method to save data into localstorage
function saveLogin(){
    
    //get data from localstorage and store to loginlist array
    //we must to use JSON.parse, because data as string, we need convert to array
    loginList = JSON.parse(localStorage.getItem('loginItem')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    loginList.length != 0 ? loginList.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

        //edit loginList array based on value
        loginList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.uname      = document.getElementById('uname').value, 
                value.email       = document.getElementById('email').value
            }
        });

        //remove hidden input
        document.getElementById('id').value = ''

    }else{

        //save
        //get data from form
        console.log(document.getElementById('uname').value)
        var item = {
            id        : id + 1,
            uname     : document.getElementById('uname').value,
            email       : document.getElementById('email').value
        }
        console.log(item);

        //add item data to array blogList
        loginList.push(item)
    }

    // save array into localstorage
    localStorage.setItem('loginItem', JSON.stringify(loginList))

    //update table list
    allLoginData()
}