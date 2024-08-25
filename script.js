const imgs = document.querySelectorAll('.h-slider ul img');
const prev_btn = document.querySelectorAll('.control_prev');
const next_btn = document.querySelectorAll('.control_next');

let n = 3;

function changeSlide(){
   for (let i = 0; i < imgs.length; i++) 
    { 
       imgs[n].style.display = 'none';
    }   
}
   changeSlide();

   const scrollContainer = document.querySelectorAll('.products');
   for (const items of scrollContainer){
    items.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    items.scrollLeft += evt.deltaY;
    
   })
   }