$(document).ready(function()
{
    $(".cajalogo").hide();
});

$(document).ready(function()
{
    var altura = $(".seccion1").offset().top;

    $(window).on("scroll", function(){
        if($(window).scrollTop() > (altura - 40))
        {
            $(".cajalogo").show(500);
        }
        else
        {
            $(".cajalogo").hide(500);
        }
    });
});