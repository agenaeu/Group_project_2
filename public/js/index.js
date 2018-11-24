$(document).ready(function () {

    $(document).on("click", "#orderSubmit", newOrder);

    function newOrder(orderData) {
        $.post("/api/orders", orderData)
            .then(function (orderData) {
                res.json(orderData);
            })
    };

    $('#s_1').on('change', function () {
        $('#res1').html($(this).val());
    });

    $('#s_2').on('change', function () {
        $('#res2').html($(this).val());
    });

    $('#s_3').on('change', function () {
        $('#res3').html($(this).val());
    });

    $('#s_4').on('change', function () {
        $('#res4').html($(this).val());
    });

    $('#s_5').on('change', function () {
        $('#res5').html($(this).val());
    });

    $('#s_6').on('change', function () {
        $('#res6').html($(this).val());
    });

    $('#s_7').on('change', function () {
        $('#res7').html($(this).val());
    });

    $('#s_8').on('change', function () {
        $('#res8').html($(this).val());
    });

    $('#s_9').on('change', function () {
        $('#res9').html($(this).val());
    });

    $('#s_10').on('change', function () {
        $('#res10').html($(this).val());
    });

    $('#s_11').on('change', function () {
        $('#res11').html($(this).val());
    });

    $('#s_12').on('change', function () {
        $('#res12').html($(this).val());
    });

    $('#s_13').on('change', function () {
        $('#res13').html($(this).val());
    });

    $('#s_14').on('change', function () {
        $('#res14').html($(this).val());
    });

    $('#s_15').on('change', function () {
        $('#res15').html($(this).val());
    });

    $('#s_16').on('change', function () {
        $('#res16').html($(this).val());
    });

    $('#s_17').on('change', function () {
        $('#res17').html($(this).val());
    });

    $('#s_18').on('change', function () {
        $('#res18').html($(this).val());
    });

    $('#s_19').on('change', function () {
        $('#res19').html($(this).val());
    });

    $('#s_20').on('change', function () {
        $('#res20').html($(this).val());
    });

    $('#s_21').on('change', function () {
        $('#res21').html($(this).val());
    });

    $('#s_22').on('change', function () {
        $('#res22').html($(this).val());
    });


    // modal js
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    // apply change to all id's that start with s

    var boxHide = $(".sticky");

    function hideList() {
        boxHide.hide();
    }

    hideList();

    $("[id^='s']").on('change', function () {
        boxHide.fadeIn("slow");

    })

    //--------------------------------------------------------------------------------------
    // post method to submit sushi order to DB
});