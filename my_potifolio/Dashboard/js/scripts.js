const toggleButton= document.getElementsByClassName('checkbtn')[0];
const menuBar= document.getElementsByClassName('navBar-links');
toggleButton.addEventListener('click', function(){
    for (var i=0; i<menuBar.length; i++){
        menuBar[i].classList.toggle('active')
    }
})
