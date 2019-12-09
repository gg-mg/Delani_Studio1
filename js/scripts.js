$(document).ready(function () {
    $("#design-image").click(function () {
        $(this).hide();
        $("#design").show();
    });

    $('#design').click(function () {
        $(this).hide();
        $('#design-image').show();
    });
});
$(document).ready(function () {
    $("#design-image").click(function () {
        $(this).hide();
        $("#development").show();
    });

    $('#development').click(function () {
        $(this).hide();
        $('#design-image').show();
    });
});
$(document).ready(function () {
    $("#design-image").click(function () {
        $(this).hide();
        $("#product-management").show();
    });

    $('#product-management').click(function () {
        $(this).hide();
        $('#design-image').show();
    });
});