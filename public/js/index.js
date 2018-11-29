$(document).ready(function () {
    var food;
    $.get('/api/food', function(results) {
      food = results;
    });
    let tableNum = 1;
    var requestObject = {};
    $('#submitForm').click(function(event) {
      event.preventDefault();
      submitOrder(requestObject);
    });
    function submitOrder(order) {
      $.post('/api/orders', order, function(data) {
        console.log(data);
      });
    }
    $('#s_1').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'tuna') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res1').html('TUNA: ' + value);
  });
  $('#s_2').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'tuna belly') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res2').html('TUNA BELLY: ' + value);
  });
  $('#s_3').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'yellowtail') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res3').html('YELLOWTAIL: ' + value);
  });
  $('#s_4').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'salmon') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res4').html('SALMON: ' + value);
  });
  $('#s_5').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'octopus') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res5').html('OCTOPUS: ' + value);
  });
  $('#s_6').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'fresh water eel') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res6').html('FRESH WATER EEL: ' + value);
  });
  $('#s_7').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'salt water eel') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res7').html('SALT WATER EEL: ' + value);
  });
  $('#s_8').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'sea urchin') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res8').html('SEA URCHIN: ' + value);
  });
  $('#s_9').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'shrimp') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res9').html('SHRIMP: ' + value);
  });
  $('#s_10').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'sweet shrimp') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res10').html('SWEET SHRIMP: ' + value);
  });
  $('#s_11').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'smoked salmon') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res11').html('SMOKED SALMON: ' + value);
  });
  $('#s_12').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'vegi vegi') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res12').html('VEGI VEGI: ' + value);
  });
  $('#s_13').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'rainbow') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res13').html('RAINBOW: ' + value);
  });
  $('#s_14').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'caterpillar') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res14').html('CATERPILLAR: ' + value);
  });
  $('#s_15').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'soft shell crab') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res15').html('SOFT SHELL CRAB: ' + value);
  });
  $('#s_16').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'futomaki') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res16').html('FUTOMAKI: ' + value);
  });
  $('#s_17').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'double dragon') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res17').html('DOUBLE DRAGON: ' + value);
  });
  $('#s_18').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'sake kani') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res18').html('SAKE KANI: ' + value);
  });
  $('#s_19').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'big eye diver') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res19').html('BIG EYE DIVER: ' + value);
  });
  $('#s_20').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'tempura crunchy') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res20').html('TEMPURA CRUNCHY: ' + value);
  });
  $('#s_21').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'ahi tuna tataki') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res21').html('AHI TUNA TATAKI: ' + value);
  });
  $('#s_22').on('change', function() {
    var value = $(this).val();
    food.map(food => {
      var rollName = food.rollName.toLowerCase();
      if (rollName === 'poki poki') {
        requestObject.rollName = rollName;
        requestObject.quantity = value;
        requestObject.tableNum = tableNum;
        console.log(requestObject);
      }
    });
    $('#res22').html('POKI POKI: ' + value);
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