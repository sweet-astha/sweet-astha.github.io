$( document ).ready(function() {
	/*document.getElementById('bgvideo').play();
	document.getElementById('bgvideo').pause();
	document.getElementById('bgvideo').play();
	*/
	
/*------------------------------ Page Scrolling ----------------------*/
$('.page-scroll a').bind('click', function(event) {
document.getElementById('bgvideo').play();
var $anchor = $(this);
$('html, body').stop().animate({
scrollTop: $($anchor.attr('href')).offset().top
}, 1500, 'easeInOutExpo');
event.preventDefault();
});
/*------------------------------ Bootstrap Carousel ----------------------*/
$('#myCarousel').carousel({
interval: 18000, //changes the speed
pause: "false"
})
//Bootstrap Carousel Progressbar
$("#progressbar").progressbar({
value: 1
});
$("#progressbar > .ui-progressbar-value").animate({
width: "100%"
}, 18000);
$('#myCarousel').bind('slid.bs.carousel', function (e) {
$("#progressbar > .ui-progressbar-value").finish();
$("#progressbar > .ui-progressbar-value").animate({
width: "0%"
}, 0);
$("#progressbar > .ui-progressbar-value").animate({
width: "100%"
}, 18000);
});
/*------------------------------ OWL Carousel -----------------*/
$("#owl-moments").owlCarousel({
items : 4,
autoPlay : true,
lazyLoad : true
});
$('.popup-image').magnificPopup({
type: 'image',
removalDelay: 500, //delay removal by X to allow out-animation
callbacks: {
beforeOpen: function() {
// just a hack that adds mfp-anim class to markup
this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
this.st.mainClass = this.st.el.attr('data-effect');
}
},
closeOnContentClick: true,
midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
/*------------------------------ WOW Script ----------------------*/
new WOW().init();
return false;
});
/*------------------------------ Count Up ----------------------*/
setInterval(function() {
var timespan = countdown(new Date("12/29/2016"), new Date());
var div = document.getElementById('time');
div.innerHTML = "<div><span>Years</span>" + timespan.years + "</div>" + "<div><span>Months</span>" + timespan.months + "</div>" + "<div><span>Days</span>" + timespan.days + "</div>" + "<div><span>Hours</span>" + timespan.hours + "</div>" + "<div><span>Minutes</span>" + timespan.minutes + "</div>" + "<div><span>Seconds</span>" + timespan.seconds + "</div>"
}, 1000);
/*------------------------------ Preloader ----------------------*/
$(window).load(function() {
$('.spinner').fadeOut();
$('#preloader').delay(350).fadeOut('slow');
$('body').delay(350).css({'overflow':'visible'});
});