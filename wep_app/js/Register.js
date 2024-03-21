
document.addEventListener('DOMContentLoaded',function(){
    
    const registerForm = document.getElementById('registerForm');
    const message = document.getElementById('message');

    registerForm.addEventListener("submit", function(event){
        event.defaultPrevented();
    })

})