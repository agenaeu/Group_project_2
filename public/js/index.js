$(document).ready(function () {

    let tableNum = Math.floor(Math.random() * 4) + 1;
    var tableOneOrder = [];

    function SushiOrder(Roll, howMany, tableNumber){
        this.Roll = rollName;
        this.howMany = quantity;
        this.tableNumber = tableNum;
    }
    function addOrder(Roll, howMany, tableNumber){
        var one = new SushiOrder(Roll, howMany, tableNumber);
        tableOneOrder.push(one);
    }
    

   
   

    $(document).on("click", "#orderSubmit", newOrder);
    event.preventDefault();
    console.log()
  


    function newOrder(orderData) {
        $.post("/api/orders", orderData)
            .then(function (orderData) {
                res.json(orderData);

            })
    };

    $('#s_1').on('change', function () {
        var value = $(this).val();
        $('#res1').html("TUNA " + value);
    });

    $('#s_2').on('change', function () {
        var value = $(this).val();
        $('#res2').html("TUNA BELLY " + value);
    });

    $('#s_3').on('change', function () {
        var value = $(this).val();
        $('#res3').html("YELLOWTAIL " + value);
    });

    $('#s_4').on('change', function () {
        var value = $(this).val();
        $('#res4').html("SALMON " + value);
    });


    $('#s_5').on('change', function () {
        var value = $(this).val();
        $('#res5').html("OCTOPUS " + value);
    });

    $('#s_6').on('change', function () {
        var value = $(this).val();
        $('#res6').html("FRESH WATER EEL " + value);
    });


    $('#s_7').on('change', function () {
        var value = $(this).val();
        $('#res7').html("SALT WATER EEL " + value);
    });



    $('#s_8').on('change', function () {
        var value = $(this).val();
        $('#res8').html("SEA URCHIN " + value);
    });



    $('#s_9').on('change', function () {
        var value = $(this).val();
        $('#res9').html("SHRIMP " + value);
    });


    $('#s_10').on('change', function () {
        var value = $(this).val();
        $('#res10').html("SWEET SHRIMP " + value);
    });


    $('#s_11').on('change', function () {
        var value = $(this).val();
        $('#res11').html("SMOKED SALMON " + value);
    });


    $('#s_12').on('change', function () {
        var value = $(this).val();
        $('#res12').html("VEGI VEGI " + value);
    });


    $('#s_13').on('change', function () {
        var value = $(this).val();
        $('#res13').html("RAINBOW " + value);
    });



    $('#s_14').on('change', function () {
        var value = $(this).val();
        $('#res14').html("CATERPILLAR " + value);
    });


    $('#s_15').on('change', function () {
        var value = $(this).val();
        $('#res15').html("SOFT SHELL CRAB " + value);
    });


    $('#s_16').on('change', function () {
        var value = $(this).val();
        $('#res16').html("FUTOMAKI " + value);
    });

    $('#s_17').on('change', function () {
        var value = $(this).val();
        $('#res17').html("DOUBLE DRAGON " + value);
    });


    $('#s_18').on('change', function () {
        var value = $(this).val();
        $('#res18').html("SAKE KANI " + value);
    });

    $('#s_19').on('change', function () {
        var value = $(this).val();
        $('#res19').html("BIG EYE DIVER " + value);
    });

    $('#s_20').on('change', function () {
        var value = $(this).val();
        $('#res20').html("TEMPURA CRUNCHY " + value);
    });



    $('#s_21').on('change', function () {
        var value = $(this).val();
        $('#res21').html("AHI TUNA TATAKI " + value);
    });

    $('#s_22').on('change', function () {
        var value = $(this).val();
        $('#res22').html("POKI POKI " + value);
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