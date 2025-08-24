const buttons=document.querySelectorAll(".box");
let turn0=true;
const winner=document.querySelector(".winner")
let count=0;
const rese=document.querySelector(".reset-btn");
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]
buttons.forEach(butto=>{
     butto.addEventListener('click',()=>{
      console.log('clicked');
      count++;
      if(turn0){
        butto.innerText="0";
        turn0=false;
      }
      else{
        butto.innerText="X";
        turn0=true;
      }
      butto.disabled=true;
      checkresult();
     }   
     )
      
})
const disa=()=>{
    buttons.forEach(btn=>{
        btn.disabled=true;
    })
}
const resetr=()=>{
    turn0=true;
     buttons.forEach(btn=>{
        btn.disabled=false;
        btn.innerText="";
    })
    winner.innerText=``;
}
rese.addEventListener('click',resetr)
const checkresult=()=>{
    winpattern.forEach(pattern=>{
        if(buttons[pattern[0]].innerText==""||buttons[pattern[1]].innerText==""||buttons[pattern[2]].innerText==""){
            return;
        }
        else if(buttons[pattern[0]].innerText==buttons[pattern[1]].innerText &&buttons[pattern[1]].innerText==buttons[pattern[2]].innerText){
            console.log('winner');
            winner.innerText= `Winner is ${buttons[pattern[0]].innerText}`;
            disa();
        }
        else {
            return;
        }
    }

    )
}


