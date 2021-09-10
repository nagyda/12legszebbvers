$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 100) {
      $("nav").addClass("scrolled");
    } else {
      $("nav").removeClass("scrolled");
    }
  });
});

function loadFrame(elm) {
  var frame1 = document.getElementById('frame1');
  var book_modal = document.getElementById('book_modal');
  var body = document.getElementsByTagName("BODY")[0];
  var html = document.getElementsByTagName("HTML")[0];


  frame1.src = elm.dataset.src;
  book_modal.style.display = 'flex';
  body.style.overflowY = 'hidden';
  html.style.overflowY = 'hidden';
}

function mobilenav() {
  var x = document.getElementById("desktop_nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function closebook() {
  document.getElementById('book_modal').style.display = "none";
  document.body.style.overflowY = "auto";
  var frame1 = document.getElementById('frame1');
  frame1.src = "loading.html";

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