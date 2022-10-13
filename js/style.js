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