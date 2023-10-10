//ローディングアニメーション//
$(window).on('load', function () {
  $("#load_logo_ttl").fadeIn('slow');
  $("#load_logo").delay(2200).fadeOut('slow');
  $("#load_logo_ttl").delay(1200).fadeOut('slow');
});

//スムーススクロール//
$('#js-nav a').on('click', function () {
  let hrefElement = $(this).attr('href');
  let headerHeight = $('#header').outerHeight(true);
  let position = $(hrefElement).offset().top - headerHeight;
  $('body,html').animate({
    scrollTop: position
  }, 500);
  return false;
});

//アコーディオン//
$(function () {
  $('.toggle_title').on('click', function () {
    $(this).toggleClass('selected');
    $(this).next().slideToggle(500);
    $('.toggle_title').not($(this)).next().slideUp(500);
    $('.toggle_title').not($(this)).removeClass('selected');
  });
});

// ハンバーガーメニュー
window.onunload = function() {};
function sizecheck() {
  w = window.innerWidth ? window.innerWidth : $(window).width();
  h = window.innerHeight ? window.innerHeight : $(window).height();
}
sizecheck();
$(function () {
  if (w > 768) {
} else { 
  $("header .drawer").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  $(".header-wrap__nav__list__item a").click(function(){
  $('body').toggleClass('nav-open');
  $('header .header-wrap__nav').fadeToggle(200);
    });
  }
}); 

// フェードアニメーション
function fadeIn() {
  $('.fadeInTrigger').each(function () {
    let scroll = $(window).scrollTop();
    let tritop = $(this).offset().top + 100;
    let winHeight = $(window).height();
    if (scroll >= tritop - winHeight) {
      $(this).addClass('fadeIn');
    } else {
      $(this).removeClass('fadeIn');
    }
  });
}
$(window).scroll(function () {
  fadeIn();
});