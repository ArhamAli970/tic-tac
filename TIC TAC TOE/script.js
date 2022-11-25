console.log("ha yahi hu")

let audi=new Audio('game.mp3')

cturn=()=>{ 

    if (tur=="X"){ 
       return "O"

    }
    else{ 
       return "X"
    }

}
win=()=>{ 

}  
tur="X"
let x=document.getElementsByClassName('box')
Array.from(x).forEach((ele)=>{ 

   let dabba=ele.querySelector('.text') 
ele.addEventListener('click',()=>{ 
if (dabba.innerText===""){  
 audi.play()
   dabba.innerText=tur
   tur=cturn()
   document.getElementById('info').innerText="turn of"+" "+tur
}


})
})




