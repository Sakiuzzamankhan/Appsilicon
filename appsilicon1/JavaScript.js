$(document).ready(function () {
    "use strict"
    $('.overlay').ripples({

        dropRadius: 10,
        perturbance: 0.5,

    });
});
function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
//var slideIndex = 0;
//showSlides();

//function showSlides() {
//    var i;
//    var slides = document.getElementsByClassName("mySlides");
//    var dots = document.getElementsByClassName("dot");
//    for (i = 0; i < slides.length; i++) {
//        slides[i].style.display = "none";
//    }
//    slideIndex++;
//    if (slideIndex > slides.length) { slideIndex = 1 }
//    for (i = 0; i < dots.length; i++) {
//        dots[i].className = dots[i].className.replace(" active", "");
//    }
//    slides[slideIndex - 1].style.display = "block";
//    dots[slideIndex - 1].className += " active";
//    setTimeout(showSlides, 3000); // Change image every 2 seconds
//}

