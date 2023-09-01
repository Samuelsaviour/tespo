const burger=document.querySelector('#burger')
const sidebar=document.querySelector('.sidebar')

const body=document.querySelector('body')

burger.addEventListener('click',function() {
  sidebar.classList.toggle('left')
})
document.addEventListener('click',function(e){
 
if(!e.target.classList.contains('harmburger') ) {
  sidebar.classList.remove('left') 
  console.log(e.target);  
}  
 

})