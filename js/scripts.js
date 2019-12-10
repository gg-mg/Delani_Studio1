$(document).ready(function () {
    $("#design-image").click(function () {
        $(this).hide();
        $("#design").show();
    });

    $('#design').click(function () {
        $(this).hide();
        $('#design-image').show();
        event.preventDefault();
    });
});
$(document).ready(function () {
    $("#development-image").click(function () {
        $(this).hide();
        $("#development").show();
    });

    $('#development').click(function () {
        $(this).hide();
        $('#development-image').show();
        event.preventDefault();
    });
});
$(document).ready(function () {
    $("#product-image").click(function () {
        $(this).hide();
        $("#product").show();
    });

    $('#product').click(function () {
        $(this).hide();
        $('#product-image').show();
        event.preventDefault();
    });

    $('.img-one').hover(function () {
        $('.proj1').toggle();
    });

    $('.img-two').hover(function () {
        $('.proj2').toggle();
    });

    $('.img-three').hover(function () {
        $('.proj3').toggle();
    });

    $('.img-four').hover(function () {
        $('.proj4').toggle();
    });
    $('.img-five').hover(function () {
        $('.proj5').toggle();
    });
    $('.img-six').hover(function () {
        $('.proj6').toggle();
    });
    $('.img-seven').hover(function () {
        $('.proj7').toggle();
    });
    $('.img-eight').hover(function () {
        $('.proj8').toggle();
    });
    $(".button").click(function(){
        var name = document.getElementById('#email').value ;
        alert('Hey '+ name +", thank you for contacting us. We will get back to you.")
    });


});