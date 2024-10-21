let conts = 0


 function incrementF(){
    conts++;
     document.getElementById("value").innerHTML = conts;
 }

 function decrementF(){
     if (conts>0)
        {
          conts--;
        }
     document.getElementById("value").innerHTML = conts;
 }

 function resetF(){
    console.log("dsfs")
    
    conts=0;
     document.getElementById("value").innerHTML = conts;
 }