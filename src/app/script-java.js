$(document).ready(function(){ //Adicionar eventos ao meu site usando JQuery

    var elementos = $("#html, #css, #js, #home, #angular");
    
    elementos.on({
        mouseover: function(){
            elementos.not(this).animate({ opacity: "0.5"});
            $(this).animate({ opacity: "1"});
        },
            mouseout: function(){
            elementos.animate({ opacity: "1"});
        }
}); 
}); 
