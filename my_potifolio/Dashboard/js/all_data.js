//    //method to get all blog data
//    function allBlogData(){
            
//     table.innerHTML = ''
//     //get data from localstorage and store to bloglist array
//     //we must to use JSON.parse, because data as string, we need convert to array
//     blogList = JSON.parse(localStorage.getItem('listItem')) ?? []

//     //looping data and show data in table
//     blogList.forEach(function (value, i){
       
//         var table = document.getElementById('table')

//         table.innerHTML += `
//             <tr>
//                 <td>${i+1}</td>
//                 <td>${value.title}</td>
//                 <td>${value.image}</td>
//                 <td>${value.readMore}</td>
//                 <td> <img src='../../../../images/1a.png'/></td>
                
//                 <td>
//                     <button class="btn btn-sm btn-success" onclick="updateBlogFunc(${value.id})">
//                         <i class="fa fa-edit"></i>
//                     </button>
                    
//                 </td>

//                 <td>
//                     <button class="btn btn-sm btn-danger" onclick="removeBlogData(${value.id})">
//                         <i class="fa fa-trash"></i>
//                     </button>
//                 </td>

//             </tr>`
//     })
// }



 //method to get all contact me  data
//  function allContactData(){
//     var table = document.querySelector('#contact-table')
//     table.innerHTML = ''
//     //get data from localstorage and store to contactlist array
//     //we must to use JSON.parse, because data as string, we need convert to array
//     contactList = JSON.parse(localStorage.getItem('contactItem')) ?? []
//     console.log(contactList);

//     //looping data and show data in table
//     contactList.forEach(function (value, i){
       
//         console.log(value.username);
        
        

//         table.innerHTML += `
//             <tr>
//                 <td>${i+1}</td>
//                 <td>${value.username}</td>
//                 <td>${value.address}</td>
//                 <td>${value.message}</td>
                
                
//                 <td>
//                     <button class="btn btn-sm btn-danger" onclick="removeContactData(${value.id})">
//                         <i class="fa fa-trash"></i>
//                     </button>
//                 </td>
//             </tr>`
//     })
// }