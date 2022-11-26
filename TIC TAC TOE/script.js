

let audi=new Audio('game.mp3')
let gameover=false

cturn=()=>{ 

    if (tur=="X"){ 
       return "O"

    }
    else{ 
       return "X"
    }

}

tur="X"
let t=0
let x=document.getElementsByClassName('box')
Array.from(x).forEach((ele)=>{ 

   let dabba=ele.querySelector('.text') 
ele.addEventListener('click',()=>{ 
if (dabba.innerText===""){  
 audi.play()
   dabba.innerText=tur  
   t+=1 
   win()
if (t==9 && !gameover){ 
gameover=true
document.getElementById('info').innerText="MATCH TIED"
document.getElementById('p989').style.display="block"
} 
    
else if (!gameover){ 
   tur=cturn()
   document.getElementById('info').innerText="turn of"+" "+tur;
}
else{ 
   document.getElementById('info').innerText="the winner is"+" "+tur;
}

}
})
}) 

win=()=>{  
z=document.getElementById('q0').innerText
h=document.getElementById('q1').innerText
c=document.getElementById('q2').innerText
v=document.getElementById('q3').innerText
b=document.getElementById('q4').innerText
n=document.getElementById('q5').innerText
m=document.getElementById('q6').innerText
j=document.getElementById('q7').innerText 
k=document.getElementById('q8').innerText 

if ((z=="X" && h=="X" && c=="X") || (z=="O" && h=="O" && c=="O")){ 

document.getElementById('o9').style.visibility="visible";
gameover=true 
document.getElementById('p989').style.display="block"

}

else if((v=="X" && b=="X" && n=="X") || (v=="O" && b=="O" && n=="O")){ 

   document.getElementById('o9').style.visibility="visible";
   gameover=true
   document.getElementById('p989').style.display="block"
}

else if((m=="X" && j=="X" && k=="X") || (m=="O" && j=="O" && k=="O")){ 

   document.getElementById('o9').style.visibility="visible";
   gameover=true
   document.getElementById('p989').style.display="block"
   
}

else if((z=="X" && v=="X" && m=="X") || (z=="O" && v=="O" && m=="O")){ 

   document.getElementById('o9').style.visibility="visible";
   gameover=true
   document.getElementById('p989').style.display="block"
   
}

else if((h=="X" && j=="X" && b=="X") || (h=="O" && j=="O" && b=="O")){ 

   document.getElementById('o9').style.visibility="visible";
   gameover=true
   document.getElementById('p989').style.display="block"
   
}
else if((c=="X" && n=="X" && k=="X") || (c=="O" && n=="O" && k=="O")){ 

   document.getElementById('o9').style.visibility="visible";
   gameover=true
   document.getElementById('p989').style.display="block"
   
}

else if((z=="X" && b=="X" && k=="X") || (z=="O" && b=="O" && k=="O")){ 

   document.getElementById('o9').style.visibility="visible";
   gameover=true
   document.getElementById('p989').style.display="block"
}

else if((c=="X" && b=="X" && m=="X") || (c=="O" && b=="O" && m=="O")){ 

   document.getElementById('o9').style.visibility="visible";
   gameover=true
   document.getElementById('p989').style.display="block"
   
}



}




document.getElementById('p23').addEventListener("click",()=>{ 

   dok=document.querySelectorAll('.text')
   for (i=0;i<9;i++){ 
      dok[i].innerText="";
   }

   document.getElementById('o9').style.visibility="hidden"; 
   tur="X"
   document.getElementById('info').innerText="Turn of "+" "+tur;
gameover=false;
t=0
})



document.getElementById('p989').addEventListener("click",()=>{ 
   
      dok=document.querySelectorAll('.text')
      for (i=0;i<9;i++){ 
         dok[i].innerText="";
      }
   
      document.getElementById('o9').style.visibility="hidden"; 
      tur="X"
      document.getElementById('info').innerText="Turn of "+" "+tur;
   gameover=false;
   document.getElementById('p989').style.display="none"
   t=0
   })


// function fun(){  
//    console.log("haha afuoerfoierfiriuirthgv rtiuyvrui")
//  oi=document.querySelectorAll('.text')

// for (j=0;j<9;j++){ 
// if (oi[j].innerText==""){ 
// console.log("ji ha hum hai")
//    oi[j].disabled=true

// }
// }

// }
