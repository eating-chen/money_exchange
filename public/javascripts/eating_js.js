$("#et_btn").click(function(){
    var origin = $('#original').val();
    var origin_money = $('#origin_money').val();
    var change = $('#change').val();
    $("#et_alert").hide();
    $.ajax({
        type: "POST",
        url: "/money",
        dataType: "json",
        data:{ 
            'origin': origin,
            'origin_money':origin_money,
            'change':change
        },
        async: false,
        success: function(response){
            $('#et_money').empty();
            $("#et_alert").show();
            console.log(response.money);
            money = response.money;
            $("#et_money").append(origin+"轉"+change+": "+ money);
        },
        error: function(){
            console.log("ajax error!!");
        }
    });
});