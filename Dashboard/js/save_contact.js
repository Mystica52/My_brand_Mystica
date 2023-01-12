

//method to save data into localstorage
function saveContact(){
    
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('contactItem')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0

    if(document.getElementById('id').value){

        //edit contactList array based on value
        contactList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.username      = document.getElementById('username').value, 
                value.address       = document.getElementById('address').value
                value.message       = document.getElementById('message').value
                
                
            }
        });

        //remove hidden input
        document.getElementById('id').value = ''

    }else{

        //save
        //get data from form
        console.log(document.getElementById('username').value)
        var item = {
            id        : id + 1,
            username     : document.getElementById('username').value,
            address       : document.getElementById('address').value,
            message      : document.getElementById('message').value
        }
       

        //add item data to array blogList
        contactList.push(item)
    }

    // save array into localstorage
    localStorage.setItem('contactItem', JSON.stringify(contactList))

    //update table list
    allContactData()
    
    
}