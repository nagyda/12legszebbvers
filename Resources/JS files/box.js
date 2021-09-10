/*open program*/
var body = document.getElementsByTagName("BODY")[0];
var program_modal = document.getElementById('program_modal');
var program_iframe = document.getElementById("program_iframe");

function openprogram() {
  program_modal.style.display = 'flex';
  body.style.overflowY = 'hidden';
  program_iframe.style.display = 'flex';
  
}

/*open book*/
var body = document.getElementsByTagName("BODY")[0];
var book_modal = document.getElementById('book_modal');
var book_iframe = document.getElementById('book_iframe');

function openbook() {
  book_modal.style.display = 'flex';
  body.style.overflowY = 'hidden';
  book_iframe.style.display = 'flex';
}

function closeprogram() {
  document.getElementById('program_modal').style.display = "none";
  document.body.style.overflowY = "auto";
}

function closebook() {
  document.getElementById('book_modal').style.display = "none";
  document.body.style.overflowY = "auto";
}

var modal = document.getElementById('modal');
var program_modal = document.getElementById('program_modal');
var content = document.getElementById('modal-content');
var sidenav = document.getElementById('mySidenav');
var container = document.getElementById('poem_content');
var shortcut = document.getElementsByClassName('shortcut');


window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflowY = "auto";
    }
    if (event.target == program_modal) {
    program_modal.style.display = 'none';
    document.body.style.overflowY = "auto";
  }
    if (event.target == book_modal) {
      book_modal.style.display = 'none';
      document.body.style.overflowY = "auto";
    }
    if (event.target == content) {
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

  function openmodal() {
    document.getElementById('modal').style.display = 'flex';
    document.body.style.overflowY = "hidden";
}

var captionText = document.getElementById("caption");

  let slideIndex = 1;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
};

function toSlide(n) {
    showSlide(slideIndex = n);
};

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    let modalPreviews = document.getElementsByClassName('modal-preview');

    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    for (let i = 0; i < modalPreviews.length; i++) {
        modalPreviews[i].className = modalPreviews[i].className.replace(' active', '');
    };

    slides[slideIndex - 1].style.display = 'flex';
    modalPreviews[slideIndex - 1].className += ' active';

};