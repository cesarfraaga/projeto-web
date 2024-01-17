$(document).ready(function(){ //Adicionar eventos ao meu site usando JQuery

    var elementos = $("#html, #home, #js, #java, #angular");
    var buttonChamandoCss = $("#chamandoCss");
    var imgChamandoCss = $("#imgChamandoCss");
    
    elementos.on({
        mouseover: function(){
            elementos.not(this).animate({ opacity: "0.5"});
            $(this).animate({ opacity: "1"});
        },
            mouseout: function(){
            elementos.animate({ opacity: "1"});
        }
    }); 
    buttonChamandoCss.on({
        click: function(){
            imgChamandoCss.fadeIn(3000);
        },
        mouseover: function(){
            buttonChamandoCss.animate({ opacity: "0.5"});
        },
        mouseout: function(){
            buttonChamandoCss.animate({ opacity: "1"});
        }
    });
    
}); 
