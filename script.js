/*JAVAO para os botoes*/
const control = document.querySelectorAll('.control');
let currentItem = 0;
const elemento = document.querySelectorAll('.elemento');
const maxItems = elemento.length;

control.forEach(control => {
control.addEventListener('click', () =>{
    const isLeft = control.classList.contains('arrow-left');
        if (isLeft){
            currentItem -=1;
        } else {
            currentItem += 1;
        }

     if (currentItem >= maxItems)   {
        currentItem = 0;
     }

     if (currentItem < 0){
        currentItem = maxItems - 1;
     }

     elemento.forEach(elemento => elemento.classList.remove('current-element'));

     elemento[currentItem].scrollIntoView({inline : "center", behavior:"smooth"});

     elemento[currentItem].classList.add("current-element");
});    
});

/*JAVAO para os botoes2*/
const control2 = document.querySelectorAll('.control2');
let currentItem2 = 0;
const elemento2 = document.querySelectorAll('.elemento2');
const maxItems2 = elemento2.length;

control2.forEach(control2 => {
control2.addEventListener('click', () =>{
    const isLeft2 = control2.classList.contains2('arrow-left2');
        if (isLeft2){
            currentItem2 -=1;
        } else {
            currentItem2 += 1;
        }

     if (currentItem2 >= maxItems2)   {
        currentItem2 = 0;
     }

     if (currentItem2 < 0){
        currentItem2 = maxItems2 - 1;
     }

     elemento2.forEach(elemento2 => elemento2.classList.remove('current-element2'));

     elemento2[currentItem2].scrollIntoView({inline : "center", behavior:"smooth"});

     elemento2[currentItem2].classList.add("current-element2");
});    
});