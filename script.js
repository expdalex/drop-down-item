window.addEventListener('DOMContentLoaded', function(){
    
    let box = document.querySelector('.box');
    let btn = document.querySelector('button');
    let scrollHeight = box.scrollHeight;
    let clientHeight = box.clientHeight;
    let offsetHeight = box.offsetHeight;
    let paddings = +window.getComputedStyle(box, null).padding.replace(/\D/g,'') * 2; //get padding in number type

    function openBox(box, paddings, offsetHeight, scrollHeight){

        btn.addEventListener('click', function(){
            if (box.offsetHeight == scrollHeight + paddings){
                box.style.height = offsetHeight - paddings + 'px';
            } else {
                box.style.height = scrollHeight + 'px';
            //console.log(scrollHeight + paddings);
            //console.log(box.offsetHeight);
            }
        });
    }
    openBox(box, paddings, offsetHeight, scrollHeight);
});