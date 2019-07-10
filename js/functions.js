

$(document).ready(function()
{

    //obtener el ancho de la pantalla porque solamente será un slider si estamos en móvil o tablet.
    var screenWidth=$( window ).width();
    
    if(screenWidth <= 768)
    {
        var posX=0;
      
        var slides=$('.slider li').length; //7
        
        var sliderWidth=$('.slider').width();

        var incremento=$('.slider').width()/slides; //ancho del ul /7 

        var velocidad=1500;

        var intervalo=setInterval(siguiente, 5000);

        var limite=(slides)*incremento;

        function siguiente()
        {

            posX+= -incremento;
       
            if(posX<=-limite)
            {
                posX=-incremento;
             
                $('.slider').css({left:0});
            }

            mueveCarrusel();
            return false;
        }

        function mueveCarrusel()
        {
        
            $('.slider').delay(300).animate({left:posX},velocidad);
        
        }
    }
    

});