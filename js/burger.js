document.addEventListener('DOMContentLoaded', function (){
    document.getElementById("burger").addEventListener("click", function(){
        document.getElementById("burger").classList.toggle("change");
        document.getElementById("myNav").classList.toggle("mostrar");
        
    })

});