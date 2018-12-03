console.log('hold my beer')

/// //////
/// //////  alert box email
/// //////
// var $email = $('#email');
// $email.on('click',function(){
//     alert("Email: SeanBerrie21@gmail.com");
// });

/// //////
/// //////  sticky nav bar
/// //////
var num = 800
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > num) {
    $('.nav').addClass('sticky')
  } else {
    $('.nav').removeClass('sticky')
  }
})

/// //////
/// //////  media query nav bar
/// //////
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > num) {
    $('.phonecont').addClass('stickyphone')
  } else {
    $('.phonecont').removeClass('stickyphone')
  }
})

/// //////
/// //////  Testimonial loop
/// //////
var phrase = $('.test')
var x = 0
var terms = ["Sean Berrie is a hardworking guy who does whatever is asked of him. While on a trip to a UFO conference in Joshua Tree he took one for the team and slept in the car while his tubby friend had sex with a local. Sean has a strong work ethic and is great at finding ways to get the task done, fast and effectively. He really loves Reddit and spends way too much time trying to educate his flat earther friends on Facebook. If I had to say which vegetable Sean is I wound say he's a carrot because he's long and skinny and full of good things for you. Sean was also voted the most handsome man in Utica, NY in 2002.",
  'this is 2, ipsum dolor sit amet consectetur adipisicing elit. Delectus ab facere natus voluptatum laudantium totam commodi eius magnam sapiente, aperiam ipsam blanditiis accusamus sed adipisci assumenda amet ratione voluptates similique.',
  'we go for 3, ipsum dolor sit amet consectetur adipisicing elit. Delectus ab facere natus voluptatum laudantium totam commodi eius magnam sapiente, aperiam ipsam blanditiis accusamus sed adipisci assumenda amet ratione voluptates similique.'
]
function rotateTerm () {
  phrase.text(terms[x % 3]).fadeIn(1000).delay(4000).fadeOut(1000)
  x++
};
rotateTerm()
setInterval(rotateTerm, 6000)

/// //////
/// //////  image slideshow
/// //////
var i = 0
var $slides = $('.img')
var images = ['https://i.imgur.com/xIGYFTZ.jpg',
  'https://i.imgur.com/NZUsoJR.jpg?1',
  'https://i.imgur.com/OsarbSu.jpg',
  'https://i.imgur.com/YhwtxmW.jpg']
var slideshow = function () {
  $slides.css('background-image', 'url("' + images[i % 4] + '")')
  i++
}

setInterval(slideshow, 4000)

/// //////
/// //////  click icon nav
/// //////

var $icon = $('.icon')
var $nav = $('.nav')

$icon.click(function () {
  if (!$nav.hasClass('navopen')) {
    $nav.addClass('navopen')
  } else { $nav.removeClass('navopen') }
})
