$(document).ready(function() {
   var tagsHtml = $("#tagsHtml"); //$("#id") chama a id do elemento
   var ocultarTag = $("#ocultarTag");
   var tagsOcultas = $("#tagsOcultas");
   var elementos = $("#home, #css, #js, #java, #angular");
    
   elementos.on({
       mouseover: function(){
           elementos.not(this).animate({ opacity: "0.5"});
           $(this).animate({ opacity: "1"});
       },
           mouseout: function(){
           elementos.animate({ opacity: "1"});
       }
})

   tagsHtml.on({
       click: function(){
           tagsOcultas.fadeIn(3000);
           ocultarTag.animate({ width: "150px"});
       },
       mouseover: function(){
           $(this).animate({ opacity: "0.5"});
       },
       mouseout: function(){
           $(this).animate({ opacity: "1"});
       }
   });
   ocultarTag.on({
       mouseover: function(){
           $(this).animate({ opacity: "0.5"});
       },
       mouseoutr: function(){
           $(this).animate({ opacity: "1"});
       },
       click: function(){
           tagsOcultas.fadeOut(1500);
       }
   });
});
