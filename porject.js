// -------------------------------------------------

var zoom = "30";
var headerBgOn = true;
var device = "desk";
var navScroll = -1;
var isNavOpen = false;

// initializing functions
nu();
AddSpacers();

// -------------------------------------------------

// VIEWPORT CHECK
const mediaQuery = window.matchMedia('(max-width: 900px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // console.log('Mobile')
    device = "mobile";
    imgReset();
  } else {
    // console.log('Desktop')
    device = "desk";
    imgReset();
  }
}

mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

// -------------------------------------------------

// CLOSE INFO
function closeInfo() {
  $( ".content-collection" ).removeClass( "info-expanded" );
  if (headerBgOn == false) {
    $('header').removeClass('bg-force');
  }
}

// CLOSE IMAGE
$( ".close-img" ).click(function() {
  imgReset();

  if (device == "desk") {
    // refocus the image clicked
    $( this ).parent().parent().parent().parent(".obj-wrap").get(0).scrollIntoView({block: "end"});
    $( this ).parent().parent().parent().parent(".obj-wrap").scrollTop( 300 );
  } else {
    $( this ).parent().parent().parent().parent(".obj-wrap").get(0).scrollIntoView({block: "center"});
    $( this ).parent().parent().parent().parent(".obj-wrap").scrollTop( 300 );
  }

  if (headerBgOn == false) {
    $('header').removeClass('bg-force');
  }
});

// EXPAND PROJECT DETAILS
$( ".expander" ).click(function() {
  $( this ).toggleClass("expander-open");
  $( this ).parent().parent().next( ".proj-desc" ).toggleClass( "show-description" );

  $( ".content-collection" ).toggleClass( "info-expanded" );
  if (device == "desk") {
    // refocus the image clicked
    $( this ).parent().parent().parent().parent(".obj-wrap").get(0).scrollIntoView({block: "end"});
    $( this ).parent().parent().parent().parent(".obj-wrap").scrollTop( 300 );
  } else {
  }

  if (headerBgOn == false) {
    $('header').removeClass('bg-force');
  }
});

// -------------------------------------------------

// ZOOM FUNCTIONS

// DECREASE ZOOM
function smaller() {
  if (zoom == "100") {
    fiftyP();
  } else if (zoom == "50") {
    thirtyP();
  } else if (zoom == "30") {
    twentyP();
  } else if (zoom == "20") {
    tenP();
  } else if (zoom == "10") {
    console.log("can't go smaller");
  }
}

// INCREASE ZOOM
function larger() {
  if (zoom == "10") {
    twentyP();
  } else if (zoom == "20") {
    thirtyP();
  } else if (zoom == "30") {
    fiftyP();
  } else if (zoom == "50") {
    hundredP();
  } else if (zoom == "100") {
    console.log("can't go larger");
  }
}

// 10% ZOOM
function tenP() {
  zoom = "10";

  $( ".hor" ).css({
    'height': '10%'
  });

  imgReset();
  removeZoom();
  $( ".obj-wrap" ).addClass( "ten" );
  $( ".about-content" ).addClass( "ten" );

  console.log(zoom + "%");
}

// 20% ZOOM
function twentyP() {
  zoom = "20";

  $( ".hor" ).css({
    'height': '20%'
  });

  imgReset();
  removeZoom();
  $( ".obj-wrap" ).addClass( "twenty" );
  $( ".about-content" ).addClass( "twenty" );

  console.log(zoom + "%");
}

// 33.33% ZOOM
function thirtyP() {
  zoom = "30";

  $( ".hor" ).css({
    'height': '33.3333%'
  });

  imgReset();
  removeZoom();
  $( ".obj-wrap" ).addClass( "thirty" );
  $( ".about-content" ).addClass( "thirty" );

  console.log(zoom + "%");
}

// 50% ZOOM
function fiftyP() {
  zoom = "50";

  $( ".hor" ).css({
    'height': '50%'
  });

  imgReset();
  removeZoom();
  $( ".obj-wrap" ).addClass( "fifty" );
  $( ".about-content" ).addClass( "fifty" );

  console.log(zoom + "%");
}

// 100% ZOOM
function hundredP() {
  zoom = "100";

  $( ".hor" ).css({
    'height': '100%'
  });

  imgReset();
  removeZoom();
  $( ".obj-wrap" ).addClass( "hundred" );
  $( ".about-content" ).addClass( "hundred" );

  console.log(zoom + "%");
}

// removes all zoom classes
function removeZoom() {
  $( ".obj-wrap" ).removeClass( "ten" );
  $( ".obj-wrap" ).removeClass( "thirty" );
  $( ".obj-wrap" ).removeClass( "fifty" );
  $( ".obj-wrap" ).removeClass( "twenty" );
  $( ".obj-wrap" ).removeClass( "hundred" );

  $( ".about-content" ).removeClass( "ten" );
  $( ".about-content" ).removeClass( "thirty" );
  $( ".about-content" ).removeClass( "fifty" );
  $( ".about-content" ).removeClass( "twenty" );
  $( ".about-content" ).removeClass( "hundred" );
}

// -------------------------------------------------

// ENLARGE IMAGE
$( ".img-wrap" ).click(function() {

  if ($(this).parent('.obj-wrap').hasClass("zoom")) {

    imgReset();

    if (device == "desk") {
      // refocus the image clicked
      $(this).parent('.obj-wrap').get(0).scrollIntoView({block: "end"});
      $( this ).parent('.obj-wrap').scrollTop( 300 );
    } else {
      // refocus the image clicked
      $(this).get(0).scrollIntoView({block: "center"});
      $( this ).parent('.obj-wrap').scrollTop( 300 );
    }

  } else {

    imgReset();
    $( this ).parent('.obj-wrap').addClass( "zoom" );
    $( this ).parent('.obj-wrap').children('.desc-wrap').addClass( "desc-show" );
    $( ".desc-show .desc-overview .desc-replacement .expander" ).addClass( "active" );

    if (device == "desk") {
      $('.bio').removeClass('active');
    }

    // close menu (mobile)
    $('.filter-wrap').removeClass('active');
    $('.menu-btn').removeClass('active');

    if (device == "desk") {
      // refocus the image clicked
      $(this).parent('.obj-wrap').get(0).scrollIntoView({block: "end"});
      $( this ).parent('.obj-wrap').scrollTop( 300 );
    } else {
      // refocus the image clicked
      $(this).get(0).scrollIntoView({block: "center"});
      $( this ).parent('.obj-wrap').scrollTop( 300 );
    }
  }
});

// IMAGE RESET FUNCTION
// call to remove zoom class, hide descriptions and reverse the expander icon
function imgReset() {
  // shrinks and hides and open images/descriptions
  $( ".obj-wrap" ).removeClass( "zoom" );
  $( ".grid-img" ).removeClass( "zoom" );

  // refreshes max-height to fix with resizing occasional issue upon closing item details
  $( ".grid-img" ).removeClass( "height-refresh" );
  $( ".grid-img" ).addClass( "height-refresh" );
  
  
  $( ".desc-wrap" ).removeClass( "desc-show" );

  // hides any visible expanded project descriptions
  $( ".proj-desc" ).removeClass( "show-description" );

  $('.expander').removeClass("expander-open");
  $('.expander').removeClass("active");

  $('.bio').addClass('active');

  closeInfo();

  // stops all youtube videos on page
  $("iframe").each(function() {
    var src= $(this).attr('src');
    $(this).attr('src',src);
  });
}

// active image navigation
$(".img-btn").on('click',function(){
  if ($(".obj-wrap").hasClass('zoom')) {
    var id = $(this).attr('id');
    var nav;
  
    if(id=="prev") {
      nav = $(".obj-wrap.zoom").prevAll('.obj-wrap').first();
      if(nav.length == 0) nav = $(".obj-wrap").last();
    } else if(id=="next") {
      nav = $(".obj-wrap.zoom").nextAll('.obj-wrap').first();
      if(nav.length == 0) nav = $(".obj-wrap").first();
    }
    
    nav.children(".img-wrap").click();
  }
});

// -------------------------------------------------

//RANDOM SPACERS

function AddSpacers() {
  $( ".spacer" ).remove();
  $( ".spacer-larger" ).remove();

  $( ".obj-wrap" ).each(function() {
    var d = Math.random();
    if (d < 0.1) {
      // console.log('10% chance');
      $(this).before('<div class="spacer"></div>');
    } else if (d < 0.15) {
      // console.log('10% chance');
      $(this).before('<div class="spacer-larger"></div>');
    }
  });
}

// -------------------------------------------------

// BUTTON FUNCTIONS

// FILTER BUTTONS
$(".filter button").each(function() {
  $(this).on("click", function(){
    imgReset();

    if ($(this).hasClass("active")) {
      // TOGGLE TO ALL IF CLICKED AGAIN
      $(".filter button").removeClass('active');

      $('.obj-wrap').addClass('visible');
      $('.all-btn').addClass('active');

      // to fix the scroll from closing the menu
      navOpen();

    } else if ($(this).hasClass("all-btn")) {
      // ALL FILTER CHECK
      $(".filter button").removeClass('active');

      var filtertag = $(this).attr('class');
      $('.obj-wrap').addClass('visible');
      $('.obj-wrap:not(.' + filtertag + ')').addClass('visible');
      $(this).addClass('active');

      // to fix the scroll from closing the menu
      navOpen();

    } else {
      // TURN ON FILTER IF NOT SELECTED ALREADY
      $(".filter button").removeClass('active');

      var filtertag = $(this).attr('class');
      $('.obj-wrap').addClass('visible');
      $('.obj-wrap:not(.' + filtertag + ')').removeClass('visible');
      $(this).addClass('active');

      // to fix the scroll from closing the menu
      navOpen();
    }

  });
});

// BIO BUTTON
$('.bio-btn').on("click", function(){
  $('.bio-wrap').toggleClass('active');
  $('.bio-btn').toggleClass('active');
  $('.save-bio-btn').toggleClass('active');
  $('.bio-wrap').get(0).scrollIntoView({block: "start"});
  $('.bio-wrap').scrollTop( 300 );

  // to fix the scroll from closing the menu
  navOpen();
});

// CV BUTTON
$('.cv-btn').on("click", function(){
  $('.cv-wrap').toggleClass('active');
  $('.cv-btn').toggleClass('active');
  $('.save-cv-btn').toggleClass('active');
  $('.cv-wrap').get(0).scrollIntoView({block: "start"});
  $('.cv-wrap').scrollTop( 300 );

  // to fix the scroll from closing the menu
  navOpen();
});

// MENU BUTTON (MOBILE)
$('.menu-btn-wrap').click("click", function(){
  if (isNavOpen == true) {
    navClose();
  } else {
    navOpen();
  }
});


$(window).scroll(function(e) {
  if (navScroll > -1 && Math.abs(navScroll - $(window).scrollTop()) > 80) {
    navClose();
  }
});

function navOpen() {
  $('.filter-wrap').addClass('active');
  $('.menu-btn').addClass('active');
  $('header').addClass('active');
  navScroll = $(window).scrollTop();
  isNavOpen = true;
}

function navClose() {
  $('.filter-wrap').removeClass('active');
  $('.menu-btn').removeClass('active');
  $('header').removeClass('active');
  isNavOpen = false;
}

var navBtn = document.querySelector(".menu-btn-wrap");
var navWrap = document.querySelector('.filter-wrap');

// CLOSE NAV IF USER CLICKS OUTSIDE OF IT
document.addEventListener('mouseup', function(event) {
  var isClickNav = navWrap.contains(event.target);
  var isClickButton = navBtn.contains(event.target);
    if (isNavOpen == true) {
      if (isClickNav) {
        // do nothing
      }
      else {
        if (isClickButton) {
          // navClose();
          // console.log('clicked header');
        } else {
          navClose();
          // console.log('clicked elsewhere');
        }

      }
    }
});


// -------------------------------------------------

// SHOW GRID
function gridShow() {
  $( ".grid-overlay" ).toggleClass( "grid-active" );
  $( ".img-grid-line" ).toggleClass( "grid-active" );
  $( ".grid-btn" ).toggleClass('active');  
  
  if(Cookies.get('grid') == 'true') {
    Cookies.set('grid', false);
  } else {
    Cookies.set('grid', true);
  }
  
  console.log("grid = " + Cookies.get('grid'));
}

// if cookie is undefined
if(Cookies.get('grid') == undefined) {
  Cookies.set('grid', false);
}

if(Cookies.get('grid') == 'true') {
  $( ".grid-overlay" ).addClass( "grid-active" );
  $( ".img-grid-line" ).addClass( "grid-active" );
  $( ".grid-btn" ).addClass('active');
}

console.log("grid = " + Cookies.get('grid'));

// DEVBOX FUNCTIONS
function devBox() {
  $('.devbox').toggleClass('active');
}

// HEADER BG CHEAT
$('.header-bg-btn').on("click", function(){

  if (headerBgOn == true) {
    $('header').removeClass('bg-on');
    $('.desc-content').removeClass('bg-on');
    headerBgOn = false;
    Cookies.set('h-bg', false);
  } else {
    $('header').addClass('bg-on');
    $('.desc-content').addClass('bg-on');
    headerBgOn = true;
    Cookies.set('h-bg', true);
  }

  $('.persistent-grid-line').toggleClass('active');
  $(this).toggleClass('active');

  console.log("header-bg = " + Cookies.get('h-bg'));
});

// if cookie is undefined
if(Cookies.get('h-bg') == undefined) {
  Cookies.set('h-bg', true);
}

if(Cookies.get('h-bg') == 'false') {
  $('header').removeClass('bg-on');
  $('.desc-content').removeClass('bg-on');
  headerBgOn = false;
  $('.persistent-grid-line').removeClass('active');
  $('.header-bg-btn').removeClass('active');
}

console.log("header-bg = " + Cookies.get('h-bg'));

// white bg force when hovering over header
// $( ".desc-replacement" ).hover(
//   function() {
//     if (headerBgOn == false) {
//       $('header').addClass('bg-on');
//     }
//   }, function() {
//     if (headerBgOn == false) {
//       $('header').removeClass('bg-on');
//     }
//   }
// );

// TOP ALIGN CHEAT
$('.top-align-btn').on("click", function(){
  $('.content-collection').toggleClass('align-top');
  $('.grid-img').toggleClass('align-top');
  $(this).toggleClass('active');

  if(Cookies.get('top-align') == 'true') {
    Cookies.set('top-align', false);
  } else {
    Cookies.set('top-align', true);
  }

  console.log("top-align = " + Cookies.get('top-align'));
});

// if cookie is undefined
if(Cookies.get('top-align') == undefined) {
  Cookies.set('top-align', false);
}

if(Cookies.get('top-align') == 'true') {
  $('.content-collection').addClass('align-top');
  $('.grid-img').addClass('align-top');
  $('.top-align-btn').addClass('active');
}

console.log("top-align = " + Cookies.get('top-align'));

// SHUFFLE CHEAT
function nu() {
  var random = document.querySelector('.random');
  var bio = document.querySelector('.bio-wrap');
  var cv = document.querySelector('.cv-wrap');
  var spacer = document.querySelector('.first-spacer');

  for (var i = random.children.length; i >= 0; i--) {
    random.appendChild(random.children[Math.random() * i | 0]);
  }

  // put bio and cv back at the top
  random.prepend(spacer);
  random.prepend(cv);
  random.prepend(bio);
}

$('.random-btn').on("click", function(){
  nu();
});

function olde() {
  var random = document.querySelector('.random');
  var bio = document.querySelector('.bio-wrap');
  var cv = document.querySelector('.cv-wrap');
  var spacer = document.querySelector('.first-spacer');

  $(".random .obj-wrap").sort(function(a, b) {
    return parseInt(a.id) - parseInt(b.id);
  }).each(function() {
    var elem = $(this);
    // elem.remove();
    $(elem).appendTo(".random");
  });

  // put bio and cv back at the top
  random.prepend(spacer);
  random.prepend(cv);
  random.prepend(bio);

  //reimplement spacers
  AddSpacers();
}

$('.order-btn').on("click", function(){
  olde();
});

$('.reset-btn').on("click", function(){
  Cookies.set('grid', false);
  Cookies.set('h-bg', true);
  Cookies.set('top-align', false);
  location.reload();
});

// -------------------------------------------------

// CV + BIO TEXT EDITING FUNCTIONALITY

// remove styles of rich text when pasting into bio (for first column)
var ce1 = document.querySelector('#textarea1')
ce1.addEventListener('paste', function (e) {
  e.preventDefault()
  var text = e.clipboardData.getData('text/plain')
  document.execCommand('insertText', false, text)
});

// remove styles of rich text when pasting into bio (for second column)
var ce2 = document.querySelector('#textarea2')
ce2.addEventListener('paste', function (e) {
  e.preventDefault()
  var text = e.clipboardData.getData('text/plain')
  document.execCommand('insertText', false, text)
});

// remove styles of rich text when pasting into cv (for first column)
var ce3 = document.querySelector('#textarea3')
ce3.addEventListener('paste', function (e) {
  e.preventDefault()
  var text = e.clipboardData.getData('text/plain')
  document.execCommand('insertText', false, text)
});

// remove styles of rich text when pasting into cv (for second column)
var ce4 = document.querySelector('#textarea4')
ce4.addEventListener('paste', function (e) {
  e.preventDefault()
  var text = e.clipboardData.getData('text/plain')
  document.execCommand('insertText', false, text)
});

// -------------------------------------------------

// LAZY LOAD
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");

    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) {
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
});


// -------------------------------------------------

// SAFARI FIX - FLEX BOX IMAGE SIZING
// unable to align images along bottom of flex
var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
               navigator.userAgent &&
               navigator.userAgent.indexOf('CriOS') == -1 &&
               navigator.userAgent.indexOf('FxiOS') == -1;


if (isSafari == true) {
  // console.log('safari...');
  $('.img-wrap').addClass( "img-wrap-safari" );
  $('.content-wrap').addClass( "content-wrap-safari" );
} else {
  // console.log('not safari...');
}

// -------------------------------------------------

// KEY PRESS FUNCTIONALITY
document.onkeydown = function(e) {
  if(!$("#textarea1").is(":focus") && !$("#textarea2").is(":focus") && !$("#textarea3").is(":focus") && !$("#textarea4").is(":focus")){
    switch (e.key) {
      case 'g':
        // g
        // grid
        gridShow();
        break;
      case 'Enter':
        // enter
        // shuffle
        nu();
        break;
      case 's':
        // s
        // shuffle
        nu();
        break;
      case 'Backspace':
        // backspace
        // re-order
        olde();
        break;
      case '-':
        // minus
        smaller()
        break;
      case '=':
        // plus
        larger()
        break;
      case 'ArrowLeft':
        // left arrow
        $( "#prev" ).click();
        break;
      case 'ArrowRight':
        // right arrow
        $( "#next" ).click();
        break;
      case 'x':
        // x
        // close image
        imgReset();
        break;
      case 'Escape':
        // esc
        // close image
        imgReset();
        break;
      case 'i':
        // i
        // open image details
        $( ".expander.active" ).click();
        break;
    }
  }
};
