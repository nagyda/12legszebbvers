var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  
  var panel = this.nextElementSibling;
  if (panel.style.maxHeight){
    panel.style.maxHeight = null;
  } else {
    let active = document.querySelectorAll(".accordion-div .accordion.active");
    for(let j = 0; j < active.length; j++){
      active[j].classList.remove("active");
      active[j].nextElementSibling.style.maxHeight = null;
    }
    this.classList.toggle("active");
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
  });
  }

  var modal = document.getElementById('modal');
  var program_modal = document.getElementById('modal-content');
  var sidenav = document.getElementById('mySidenav');
var container = document.getElementById('poem_content');
var shortcut = document.getElementsByClassName('shortcut');

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflowY = "auto";
    }
    if (event.target == program_modal) {
      modal.style.display = 'none';
      document.body.style.overflowY = "auto";
    }

    if (event.target != sidenav) {
      sidenav.style.width = "0";
    }

    if (event.target == document.getElementById('opensidenav')) {
      sidenav.style.width = "300px";
    }
  }

  function mobilenav() {
    var x = document.getElementById("desktop_nav");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }