const insert = document.getElementById("insert")

window.addEventListener('keydown', (e) =>{
    console.log(e)
    const { key, keyCode, code } = e;

    insert.innerHTML = `
     <div class = "key">
         ${e.key === ' ' || key}
         <small>Key</small>
        
     </div>
     <div class = "key">
         ${keyCode}
         <small>Key's value</small>
     </div>
     
     <div class = "key">
     ${code}
     <small>Key's code</small>
 </div>
  
`

});

