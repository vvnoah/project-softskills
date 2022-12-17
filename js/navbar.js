$(function(){
    $("#nav-placeholder").load("../html/navbar.html");
});

var state = "close";

function toggle() {
    if (state == "open"){
        document.getElementById("foldmenu").style.visibility = "hidden";
        state = "close";
    }
    else {
        document.getElementById("foldmenu").style.visibility = "visible";
        state = "open";
    }
    
  }