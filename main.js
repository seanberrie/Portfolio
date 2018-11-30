console.log("hold my beer");

var $email = $('#email');

$email.on('click',function(){
    alert("Email: SeanBerrie21@gmail.com");
});


var num = 800;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
    }
});


var terms = ["here is test one.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ab facere natus voluptatum laudantium totam commodi eius magnam sapiente, aperiam ipsam blanditiis accusamus sed adipisci assumenda amet ratione voluptates similique.",
            "this is 2, ipsum dolor sit amet consectetur adipisicing elit. Delectus ab facere natus voluptatum laudantium totam commodi eius magnam sapiente, aperiam ipsam blanditiis accusamus sed adipisci assumenda amet ratione voluptates similique.",
            "we go for 3, ipsum dolor sit amet consectetur adipisicing elit. Delectus ab facere natus voluptatum laudantium totam commodi eius magnam sapiente, aperiam ipsam blanditiis accusamus sed adipisci assumenda amet ratione voluptates similique.",];

function rotateTerm() {
  var phrase = $(".test").data("term") || 0;
  $(".test").data("term", phrase == terms.length -1 ? 0 : phrase + 1).text(terms[phrase]).fadeIn()
              .delay(5000).fadeOut(500, rotateTerm);
};
$(rotateTerm);

(function($) {
	
	'use strict';
	var idx = 0;
	var $slides = $('[data-slides]');
	var images = $slides.data('slides');
    var count = images.length;
    
	var slideshow = function() {
        if (idx >= count) {idx = 0}
        else {idx++};
        $slides.css('background-image', 'url("' + images[idx] + '")').show(0, 
            function() {
				setTimeout(slideshow, 5000);
			});
	};
	
	slideshow();
	
}(jQuery));

// Math.floor(Math.random() * count)



// e = count
// s = images
// ni = 0
// a = $slides
// n = slidshow



// !function(t){
//     "use strict";
//     var a=t("[data-slides]"),ni=0,s=a.data("slides"),e=s.length,
//     n=function(){
//         if(ni>=a.length){ni=0}
//         else{ni++};
//         a.css("background-image",'url("'+s[ni]+'")').show(0,
//             function(){setTimeout(n,5e3
//                 )})};
//     n()}
    
//     (jQuery);






// https://i.imgur.com/xIGYFTZ.jpg,https://i.imgur.com/NZUsoJR.jpg?1,https://i.imgur.com/OsarbSu.jpg,https://i.imgur.com/YhwtxmW.jpg
