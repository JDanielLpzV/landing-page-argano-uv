window.onscroll = function() {menuSticky()};
// Menu on scroll sticky funcion
function menuSticky() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        console.log("scroll");
      document.getElementById("menuNav").style = "transition: 0.4s; padding: .5em 8%; font-size: .9em;";
      document.getElementById("back-to-top").style.display= "block";
      
    } else {
        console.log("scroll");
      document.getElementById("menuNav").style = "transition: 0.4s; height: auto; font-size:1em; ";
      document.getElementById("back-to-top").style.display= "none";
    }
}


