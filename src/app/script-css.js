$(document).ready(function(){ //Adicionar eventos ao meu site usando JQuery

    var elementos = $("#html, #home, #js, #java, #angular");
    var buttonChamandoCss = $("#chamandoCss");
    var imgChamandoCss = $("#imgChamandoCss");
    var chamarSintaxeCss = $("#chamarSintaxeCss");
    var sintaxeCss = $("#sintaxeCss");

    $("#sintaxeCss").css("display", "none") //Outra maneira de usar o display none sem precisar ir ao style
    
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
    chamarSintaxeCss.on({
        click: function(){
            sintaxeCss.fadeIn(3000);
        },
        mouseover: function(){
            chamarSintaxeCss.animate({ opacity: "0.5"});
        },
        mouseout: function(){
            chamarSintaxeCss.animate({ opacity: "1"});
        }
    });
    
}); 
