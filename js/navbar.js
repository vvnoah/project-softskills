$(function(){
    $("#nav-placeholder").load("../html/navbar.html");
});

function toggle() {
    const foldmenu = document.getElementById("foldmenu");
    if (foldmenu.style.display === "block") {
      foldmenu.style.display = "none";
    } else {
      foldmenu.style.display = "block";
    }
  }