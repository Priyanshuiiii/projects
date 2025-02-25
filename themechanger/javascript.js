const buttons= document.querySelectorAll('.button')
const body= document.querySelector('body')
 
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click',function (e){
        console.log(e);
        console.log(e.target); //e.target means kis target se yeh event aaya h, e.target gives the div that is being clicked, and we can use that div's content or anything
        if(e.target.id === 'grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor=e.target.id;
        }
    });
    
})