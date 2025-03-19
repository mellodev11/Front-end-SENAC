
document.addEventListener("DOMContentLoaded", () =>{
    
    
    let cart = document.querySelector("#cartImg")
    
        cart.addEventListener("click", ()=>{
    
            if(confirm('Deseja add no cart')){
                alert('confirmado no cart')
               
            }else{
                alert('no add cart')
                
                
            }
     });



 });