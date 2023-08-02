const modal = document.querySelector('#modal');
const boton = document.querySelector('button');
const close = document.querySelector('.close')
boton.addEventListener('click',(event)=>{
    modal.style.display = 'block';
});

close.addEventListener('click',(event)=>{
    modal.setAttribute('style','display:none');
})