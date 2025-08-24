const input=document.querySelector(".inputbox");
const buttons=document.querySelectorAll("button");

let arr=Array.from(buttons);
let string='';

arr.forEach(buttons=>{
    buttons.addEventListener('click',(event)=>{
        if(event.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
            
        }
        else if(event.target.innerHTML=='AC'){
            string='0';
            input.value=string;
        }
        else if(event.target.innerHTML=='DEL'){
            string=string.slice(0,-1);
            input.value=string;
        }
        else{
            string+=event.target.innerHTML;
            input.value=string;
        }
    })
})