document.addEventListener('DOMContentLoaded', function (){

    // Seleccionar el modal
    var modal = document.getElementById("myModal");

    // Seleccionar el botón que abre el modal
    var btn = document.getElementById("myBtn");

    // Seleccionar el elemento span que cierra el modal
    var span = document.getElementsByClassName("close")[0];

    // Seleccionar el body para bloquearlo cuando esté abierto el modal
    var body = document.getElementById("body");

    // Cuando el usuario presiona el botón, se abre el modal
    btn.onclick = function() {
        modal.style.display = "block";
        body.style.overflow="hidden";
    }


    // Cuando el usuario clicka en el span x, cierra el modal
    span.onclick = function() {
        modal.style.display = "none";
        body.style.overflow="visible";
    }

    
    // Cuando el usuario clicka en cualquier sitio fuera del modal, este se cierra
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            body.style.overflow="visible";
        }
    }

    // Cuando el usuario presiona la tecla Esc, se cierra el modal
   /*  document.addEventListener('keydown', function(event){
        if(event.key === "Escape"){
            modal.style.display = "none";
            body.style.overflow="visible";
        }
    }); */

    //la misma función anterior pero de otra manera
    window.onkeydown = function(event){
        if(event.key === "Escape"){
             modal.style.display = "none";
            body.style.overflow="visible";
        }
    }

}); 