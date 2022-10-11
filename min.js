let menu=document.querySelector('.navbara');
let humberger=document.querySelector('#bar');
// if (humberger){
//     humberger.addEventListener('click',() => {
//         menu.classList.add('active');
//     })
// }
// else{
//     humberger.addEventListener('click',() => {
//         menu.classList.remove('active');
//     })
// }
humberger.addEventListener("click",function(){
    menu.classList.toggle('active');
});