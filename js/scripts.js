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

    $('.img-one').hover(function(){
        $('.proj1').toggle();
    });

    $('.img-two').hover(function(){
        $('.proj2').toggle();
    });

    $('.image-three').hover(function(){
        $('.proj3').toggle();
    });

    $('.image')
});