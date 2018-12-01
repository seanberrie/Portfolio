console.log("hold my beer");


/////////
/////////  alert box email
/////////
var $email = $('#email');
$email.on('click',function(){
    alert("Email: SeanBerrie21@gmail.com");
});


/////////
/////////  sticky nav bar
/////////
var num = 800;
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.nav').addClass('sticky');
    } else {
        $('.nav').removeClass('sticky');
    }
});


/////////
/////////  Testimonial loop
/////////
var phrase = $('.test')
var x = 1;
var terms = ["here is test one.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus ab facere natus voluptatum laudantium totam commodi eius magnam sapiente, aperiam ipsam blanditiis accusamus sed adipisci assumenda amet ratione voluptates similique.",
            "this is 2, ipsum dolor sit amet consectetur adipisicing elit. Delectus ab facere natus voluptatum laudantium totam commodi eius magnam sapiente, aperiam ipsam blanditiis accusamus sed adipisci assumenda amet ratione voluptates similique.",
            "we go for 3, ipsum dolor sit amet consectetur adipisicing elit. Delectus ab facere natus voluptatum laudantium totam commodi eius magnam sapiente, aperiam ipsam blanditiis accusamus sed adipisci assumenda amet ratione voluptates similique.",
        ];
function rotateTerm() {
    phrase.text(terms[x % 4]).fadeIn(1000).delay(4000).fadeOut(1000)
    x++;
};

setInterval(rotateTerm, 6000)


/////////
/////////  image slideshow
/////////
var i = 0;
var $slides = $(".img");
var images= ["https://i.imgur.com/xIGYFTZ.jpg",
            "https://i.imgur.com/NZUsoJR.jpg?1",
            "https://i.imgur.com/OsarbSu.jpg",
            "https://i.imgur.com/YhwtxmW.jpg"];
var slideshow = function(){
    $slides.css('background-image', 'url("' + images[i % 4] + '")');
    i++;
};

setInterval(slideshow,4000);