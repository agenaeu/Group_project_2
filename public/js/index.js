$(document).ready(function () {
    let tableNum = 1;
    var tableOneOrder = [];
    var chefTable = [];
    tableOneOrder.forEach(function (element) { element.quantity = "0"; });
    $('#submitForm').click(function(event){
        event.preventDefault();
        console.log(chefTable[chefTable.length-1]);
        var newOrder = chefTable[chefTable.length-1];
        submitOrder(newOrder);
        
       /*  $.ajax('/api/orders/',{
            method: 'PUT',
            data: chefTable
        }).then(function(){
            console.log(chefTable[chefTable.length-1]);
           // location.reload();
        }); */
    });
    $.post('/api/orders', orders, function(data) {
        //console.log(orders);
        console.log(data);
        //window.location.href = "/chef";
      }); 
    $('#s_1').on('change', function () {
        var value = $(this).val();
        $('#res1').html("TUNA " + value);
        $.get("/api/food/1", function (results) {
            //console.log(results);
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //console.log(chefTable);
            //console.log(chefObj);
            //console.log(results);

            //console.log(tableOneOrder);
        });
    });
    $('#s_2').on('change', function () {
        var value = $(this).val();
        $('#res2').html("TUNA BELLY " + value);
        $.get("/api/food/2", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            // console.log(tableOneOrder);
            chefTable.push(chefObj);
            //console.log(chefTable);
        });
    });
    $('#s_3').on('change', function () {
        var value = $(this).val();
        $('#res3').html("YELLOWTAIL " + value);
        $.get("/api/food/3", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            // console.log(tableOneOrder);
        });
    });
    $('#s_4').on('change', function () {
        var value = $(this).val();
        $('#res4').html("SALMON " + value);
        $.get("/api/food/4", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //  console.log(tableOneOrder);
        });
    });
    $('#s_5').on('change', function () {
        var value = $(this).val();
        $('#res5').html("OCTOPUS " + value);
        $.get("/api/food/5", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //  console.log(tableOneOrder);
        });
    });
    $('#s_6').on('change', function () {
        var value = $(this).val();
        $('#res6').html("FRESH WATER EEL " + value);
        $.get("/api/food/6", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //  console.log(tableOneOrder);
        });
    });
    $('#s_7').on('change', function () {
        var value = $(this).val();
        $('#res7').html("SALT WATER EEL " + value);
        $.get("/api/food/7", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //  console.log(tableOneOrder);
        });
    });
    $('#s_8').on('change', function () {
        var value = $(this).val();
        $('#res8').html("SEA URCHIN " + value);
        $.get("/api/food/8", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //  console.log(tableOneOrder);
        });
    });
    $('#s_9').on('change', function () {
        var value = $(this).val();
        $('#res9').html("SHRIMP " + value);
        $.get("/api/food/9", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //  console.log(tableOneOrder);
        });
    });
    $('#s_10').on('change', function () {
        var value = $(this).val();
        $('#res10').html("SWEET SHRIMP " + value);
        $.get("/api/food/10", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //  console.log(tableOneOrder);
        });
    });
    $('#s_11').on('change', function () {
        var value = $(this).val();
        $('#res11').html("SMOKED SALMON " + value);
        $.get("/api/food/11", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            // console.log(tableOneOrder);
        });
    });
    $('#s_12').on('change', function () {
        var value = $(this).val();
        $('#res12').html("VEGI VEGI " + value);
        $.get("/api/food/12", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            // console.log(tableOneOrder);
        });
    });
    $('#s_13').on('change', function () {
        var value = $(this).val();
        $('#res13').html("RAINBOW " + value);
        $.get("/api/food/13", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //  console.log(tableOneOrder);
        });
    });
    $('#s_14').on('change', function () {
        var value = $(this).val();
        $('#res14').html("CATERPILLAR " + value);
        $.get("/api/food/14", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            // console.log(tableOneOrder);
        });
    });
    $('#s_15').on('change', function () {
        var value = $(this).val();
        $('#res15').html("SOFT SHELL CRAB " + value);
        $.get("/api/food/15", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //console.log(tableOneOrder);
        });
    });
    $('#s_16').on('change', function () {
        var value = $(this).val();
        $('#res16').html("FUTOMAKI " + value);
        $.get("/api/food/16", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //console.log(tableOneOrder);
        });
    });
    $('#s_17').on('change', function () {
        var value = $(this).val();
        $('#res17').html("DOUBLE DRAGON " + value);
        $.get("/api/food/17", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //console.log(tableOneOrder);
        });
    });
    $('#s_18').on('change', function () {
        var value = $(this).val();
        $('#res18').html("SAKE KANI " + value);
        $.get("/api/food/18", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //  console.log(tableOneOrder);
        });
    });
    $('#s_19').on('change', function () {
        var value = $(this).val();
        $('#res19').html("BIG EYE DIVER " + value);
        $.get("/api/food/19", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //console.log(tableOneOrder);
        });
    });
    $('#s_20').on('change', function () {
        var value = $(this).val();
        $('#res20').html("TEMPURA CRUNCHY " + value);
        $.get("/api/food/20", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //console.log(tableOneOrder);
        });
    });
    $('#s_21').on('change', function () {
        var value = $(this).val();
        $('#res21').html("AHI TUNA TATAKI " + value);
        $.get("/api/food/21", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //console.log(tableOneOrder);
        });
    });
    $('#s_22').on('change', function () {
        var value = $(this).val();
        $('#res22').html("POKI POKI " + value);
        $.get("/api/food/22", function (results) {
            results.quantity = value;
            tableOneOrder.push(results);
            let chefObj = tableOneOrder.map(({ rollName, quantity }) => ({ rollName, quantity, tableNum: tableNum }));
            chefTable.push(chefObj);
            //console.log(tableOneOrder);
        });
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