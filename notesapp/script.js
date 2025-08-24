const add=document.querySelector('.btn');
const main=document.querySelector('.main');
const saveit=()=>{
    const boxx=document.querySelectorAll(".box textarea");
    const arr=[];
    boxx.forEach(
        (item)=>{
            arr.push(item.value);
        }

    )
    localStorage.setItem("boxx",JSON.stringify(arr));
}

add.addEventListener(
    "click", 
    function (){
        addnote();
    }
)

const addnote =(exe='')=>{
    const boxt= document.createElement('div');
    boxt.className="box";
    boxt.innerHTML=`
        <div class="head">
        <i class="fa-solid fa-trash delete"></i>
        <i class="fa-solid fa-floppy-disk save"></i>
        </div>
        <div class="text">
            <textarea name="amit" id="kr" placeholder="write your notes here">${exe}</textarea>
        </div>
        
    `;
    boxt.querySelector(".delete").addEventListener(
        "click",
        function(){
            boxt.remove();
            saveit();
        }
    )
     boxt.querySelector(".save").addEventListener(
        "click",
        function(){
            saveit();
        }
    )
   

    main.appendChild(boxt);
    
}
(
    function(){
        const lsdata=JSON.parse(localStorage.getItem("boxx"));
        lsdata.forEach(
            (item)=>{
                addnote(item);
            }
        )
    }  
)()
