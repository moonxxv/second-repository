let menu= document.querySelector('#icon')
let navUl=document.querySelector('#list')



menu.addEventListener('click',()=>{
    navUl.classList.toggle('show');

    if(menu.innerHTML === '<i class="fa-solid fa-x"></i>'){
        menu.innerHTML ='<i id="open" class="fa-solid fa-bars"></i>'
    } 
    else{
        menu.innerHTML ='<i class="fa-solid fa-x"></i>'
    }
}) 
