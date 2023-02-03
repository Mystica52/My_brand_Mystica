//method to get all data
function allLoginData(){
    var table = document.querySelector('#login-table')
    table.innerHTML = ''
    //get data from localstorage and store to loginlist array
    //we must to use JSON.parse, because data as string, we need convert to array
    loginList = JSON.parse(localStorage.getItem('loginItem')) ?? []
    console.log(loginList);

    //looping data and show data in table
    loginList.forEach(function (value, i){
       
        console.log(value.uname);
        
        

        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${value.uname}</td>
                <td>${value.email}</td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick=" removeLoginData(${value.id})">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`
    })
}