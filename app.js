window.onscroll = function() {menuSticky()};
function menuSticky() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        console.log("scroll");
      document.getElementById("menuNav").style = "transition: 0.4s; height: 4.5em; font-size: .9em;";
      //document.getElementById("logo").style.fontSize = "25px";
    } else {
        console.log("scroll");
      document.getElementById("menuNav").style = "transition: 0.4s; height: auto; font-size:1em; ";
      //document.getElementById("logo").style.fontSize = "35px";
    }
}