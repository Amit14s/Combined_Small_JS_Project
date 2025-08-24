
let color=['Red','Yellow','Green','Blue','Purple','Orange'];
let row=9;
let column=9;
let board=[];
let curtile;
let endtile;
let score=0;
let target=20;
window.onload=function(){
    startgame();
    window.setInterval(function(){
    crushcandy();
    adjustcandy();
    fillcandy();
    updatescore();
    if(target<=0){
        showresult();
    }
},100)
}

function randomcandy(){
    return color[Math.floor(Math.random() * color.length)];
}
function startgame(){
    for(let r=0;r<row;r++){
        let rowt=[];
        for(let c=0;c<column;c++){
            let tile=document.createElement('img');
            tile.id=r.toString() + '-' + c.toString();
            tile.src="./images/"+randomcandy()+'.png';
            tile.addEventListener('dragstart',dragstar);
            tile.addEventListener('dragover',dragove);
            tile.addEventListener('dragenter',dragente);
            tile.addEventListener('dragleave',dragleav);
            tile.addEventListener('dragend',dragen);
            tile.addEventListener('drop',drop);

            document.querySelector('.box').append(tile);
            rowt.push(tile);
        }
        board.push(rowt);
        
    }
    
}
function dragstar(){
    curtile=this;
}
function dragove(e){
    e.preventDefault();
}
function dragente(e){
    e.preventDefault();
}
function dragleav(){
    // 
}
function drop(){
   endtile=this; 
}
function dragen(){
    let curr=curtile.id.split("-").map(Number);
    let end=endtile.id.split("-").map(Number);
    let r1=curr[0];
    let c1=curr[1];
    let r2=end[0];
    let c2=end[1];
    let moveright= c1===c2-1 && r1===r2;
    let moveleft= c1===c2+1 && r1===r2;
    let moveup= r1===r2+1 && c1===c2;
    let movedown= r1===r2-1 && c1===c2;
    if(movedown||moveup||moveleft||moveright){
    let c=curtile.src;
    let e=endtile.src;
    curtile.src=e;
    endtile.src=c;
    if(!checksame()){
        let c=curtile.src;
    let e=endtile.src;
    curtile.src=e;
    endtile.src=c;
    }
    else{
        target--;
    }
    }
    
}

function crushcandy(){
    // crush5();
    // crush4():
   crush3();
}
function crush3(){
    // for row
     for(let r=0;r<row;r++){
        for(let c=0;c<column-2;c++){
          let cad1=board[r][c];
          let cad2=board[r][c+1];
          let cad3=board[r][c+2];
          if(cad1.src==cad2.src && cad2.src==cad3.src && !cad1.src.includes("blank")){
            console.log('find');
            
            cad1.src="./images/blank.png";
            cad2.src="./images/blank.png";
            cad3.src="./images/blank.png";
             score+=10;
          }
        }
    }
    // for column
     for(let c=0;c<row;c++){
        for(let r=0;r<column-2;r++){
          let cad1=board[r][c];
          let cad2=board[r+1][c];
          let cad3=board[r+2][c];
          if(cad1.src==cad2.src && cad2.src==cad3.src && !cad1.src.includes("blank")){
            cad1.src="./images/blank.png";
            cad2.src="./images/blank.png";
            cad3.src="./images/blank.png";
            score+=10;
          }
        
        }
    }
}
function checksame(){
    for(let r=0;r<row;r++){
        for(let c=0;c<column-2;c++){
          let cad1=board[r][c];
          let cad2=board[r][c+1];
          let cad3=board[r][c+2];
          if(cad1.src==cad2.src && cad2.src==cad3.src && !cad1.src.includes("blank")){
            return true;
          }
        }
    }
    // for column
     for(let c=0;c<row;c++){
        for(let r=0;r<column-2;r++){
          let cad1=board[r][c];
          let cad2=board[r+1][c];
          let cad3=board[r+2][c];
          if(cad1.src==cad2.src && cad2.src==cad3.src && !cad1.src.includes("blank")){
          return true;
          }
        
        }
    }
    return false;
}
function adjustcandy(){
    for(let c=0;c<column;c++){
        let idx=column-1;
        for(let r=row-1;r>=0;r--){
            if(!board[r][c].src.includes('blank')){
                let a=board[idx][c].src;
                let b=board[r][c].src;
                board[idx][c].src=b;
                board[r][c].src=a;

                idx--;
            }
        }
    }
}
function fillcandy(){
    let r=0;
    for(let c=0;c<column;c++){
         let rowt=[];
        if(board[r][c].src.includes('blank')){
           board[r][c].src="./images/"+randomcandy()+'.png';
    }
}
}
function updatescore(){
    document.querySelector('.score').innerHTML=`
    <div>${score}</div>`
}
function showresult(){
    document.querySelector(".result").classList.remove('hide');
    document.querySelector(".box").classList.add('hide');
    document.querySelector(".result").innerHTML=`
    <h1>Game Over</h1>
    <br>
    <h2>score:${score}</h2>
    `
}

