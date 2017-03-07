$(document).ready(function(){
  var streams = ["FreeCodeCamp", "wheeze202", "izakooo", "Shmellyorc","ESL_CSGO"];
  function search(){


   streams.forEach(function(stream){


    var api = "https://wind-bow.gomix.me/twitch-api/streams/" + stream
    var api2 = "https://wind-bow.gomix.me/twitch-api/channels/" + stream
    $.ajax({
      type:"GET",
      url:api,
      dataType:"json",
      async:false,
      success:function(data){
        if(data.stream==null)
          {
             $.ajax({
      type:"GET",
      url:api2,
      dataType:"json",
      async:false,
      success:function(data){
        if(data.status==404)
          {
             $("#divs").append("<div class='streams black center third'>"+data.message+"</div>");
          }
        else
          {
         $("#divs").append("<a href='"+data.url+"' target='_blank'><div class='streams red second'><div id='logo'><img src='"+data.logo +"'></div><div id='name' class='padd'>"+data.display_name+"</div><div id='content' class='big pad'>"+"Offline"+"</div></div>");
          }


      },
             });
          }
        else
          {
        $("#divs").append("<a href='"+data.stream.channel.url+"' target='_blank'><div class='streams green first'><div id='logo'><img src='"+data.stream.channel.logo +"'></div><div id='name' class='padd2'>"+data.stream.channel.display_name+"</div><div id='content' class='small pad2'>"+data.stream.channel.status+"</div></div>");
          }



      },
      error:function(){
        alart("Somethink gone wrong");
      }

    });

     });


  }

search();


  $("#one").on("click", function(){

    $(".first").show();
    $(".second").show();
    $(".third").show();

  });
  $("#two").on("click", function(){

    $(".first").show();
    $(".second").hide();
    $(".third").hide();

  });
  $("#three").on("click", function(){

    $(".first").hide();
    $(".second").show();
    $(".third").hide();

  });



});
