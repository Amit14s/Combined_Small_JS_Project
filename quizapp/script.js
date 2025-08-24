

const body=document.querySelector(".body")
const day=document.querySelector(".day")
const night=document.querySelector(".night")

day.addEventListener("click",()=>{
    body.classList.remove("dark");
})
night.addEventListener("click",()=>{
     body.classList.add("dark");
})


const question= [
    {
        'que': ' What does display: none do?',
        'a' : 'Hides element, frees space',
        'b': 'Hides element, keeps space',
        'c' : 'Changes font',
        'd' : 'Makes bold',
        'correct': 'a'
    },
    {
        'que': ' Which is a valid color value?',
        'a' : 'col:red',
        'b': 'rgb(300,0,0)',
        'c' : '#fff',
        'd' : 'color=red',
        'correct': 'c' 
    },

{
    'que': '  Which unit is relative?',
        'a' : 'PX',
        'b': 'Pt',
        'c' : 'em',
        'd' : 'cm',
        'correct': 'c' 
}

]

const quesbox=document.querySelector('.question');
const  optioninputs=document.querySelectorAll('.options');
let index=0;
let total=question.length;
let right=0;

const loadques=()=>{
    if(total==index){
        endofquiz();
    }
    else{
        resetr();
    }
    const data=question[index];
    quesbox.innerText=`${index+1}) ${data.que}`;
   optioninputs[0].querySelector("label").lastChild.textContent = data.a;

   optioninputs[1].querySelector("label").lastChild.textContent = data.b;
    
   optioninputs[2].querySelector("label").lastChild.textContent = data.c;

   optioninputs[3].querySelector("label").lastChild.textContent = data.d;
}
const submitquiz=()=>{
    const data= question[index];
    const ans=getans();
   
    if(ans == data.correct){
        right++;
    }
    index++;
    loadques();
    return;
}

const getans=()=>{
    let answer;
    const kkr=document.querySelectorAll('.rad')
   kkr.forEach((input)=>{
    if(input.checked){
        answer= input.value;
        
    }
   }
   
)
return answer;
}
const resetr=()=>{
    const kkr=document.querySelectorAll('.rad')
    kkr.forEach(
        (input)=>{
        input.checked= false
    }
)
}
const endofquiz=()=>{
    const k=document.querySelector('.box');
    k.innerHTML=`
    <div class='result'>
     <h3>Thank You for attempting Quiz</h3> <br>
     <span> you solved ${right}/${total} correct </span>
     </div>
    `;

}
 loadques();






    
