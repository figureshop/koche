// JavaScript Document
$(document).ready(function(){
	$(".nav-toggle").click(function(){
		$(".menu").slideToggle()
	})
})

if (window.location.hash) {
	scroll(0,0);
	setTimeout(function() {
		scroll(0,0);
	},1);
}

if (window.location.hash) {
	$("html, body").animate({
		scrollTop: $(window.location.hash).offset().top + 'px'
	}, 1500);
}

document.documentElement.style.setProperty('--animate-duration', '2s');

/**
 * Check if Animation is currently in view
 */
/*function anim_in_view() {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = (window_top_position + window_height);
  var $animations = $('body .animate');

  if ($animations.length) {
    $.each($animations, function() {
      var $elm = $(this);
      var element_height = $elm.outerHeight();
      var element_top_position = $elm.offset().top + 50;
      var element_bottom_position = (element_top_position + element_height);

      if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
        $elm.addClass('visible');
      }
    });
  }
}
$(window).on('load scroll resize', anim_in_view);*/



function reveal() {
  var reveals = document.querySelectorAll(".animate");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);