$(document).ready(function () {
    $(".access-QR").click(function () {
        $("#viewer").attr(".ralfs/BARCODE");
    });

    $(".access-Barcode").click(function () {
        $("#viewer").attr(".localhost/ralfs/QR");
    });
});