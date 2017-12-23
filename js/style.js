// Can also be included with a regular script tag
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var today = new Date();
var dayName = days[today.getDay()];
var month = new Array();
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";
var monthName = month[today.getMonth()];

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getHours() {
    var h = addZero(today.getHours());
    var m = addZero(today.getMinutes());
    var s = addZero(today.getSeconds());
    return h + ":" + m + ":" + s;
}

var prompt = "<span class='prompt'>user@local:~$</span>";
var options = {
  strings: ["", "hostname <br> `lonjon-desktop <br> " + prompt + "` date ^1000 `<br> " + dayName + " " + monthName + " "+ today.getDate() + " " + getHours() + " CEST " + today.getFullYear() + "<br> " + prompt + " `^1000 cat /home/lonjon/presentation.txt ^1000 <br> `My name is David Lonjon <br> Ex-student of University of Avignon <br> Got a degree in computer science <br> Ready to work <br>" + prompt +  "`^4000 clear " ,
                " "
],
  typeSpeed: 50,
  loop : true,
  showCursor: false,
  contentType: 'html',
  fadeOut: true
}

var typed = new Typed("#presentation", options);



$(".small").click(function(){
  if($(".logo").css("left") == "0px") {
    $(".logo").css("left","-214px");
    $(".sidebar").css("left","-214px");
    $("#page-content").css("left","56px");
    $(".small").text("»");
  } else {
    $(".logo").css("left","0");
    $(".sidebar").css("left","0");
    $("#page-content").css("left","270px");
    $(".small").text("«");
  }
})
$("#left li").hover(function(){
  $("#left li").removeClass("hover")
  $(this).addClass("hover")
},function(){
  $(this).removeClass("hover")
})
$("#left li").click(function(){
  $("#left li").removeClass("active");
  $(this).addClass("active");
})
if($(window).width() <= 360) {
  $(".logo").css("left","-214px");
  $(".sidebar").css("left","-214px");
  $(".small").text("»");
  $("#profilepic").css("margin-right","10px");
  $("#name i").hide();
  $("#name").css("color","white");
  $("#name span").css("color","black");
  $("#name").css("width","calc(100% - 55px)")
  $("#home-nav li").css({"float":0,"width":"100%"})
}
