// -------------------------------------------------

var device = "desk";

// -------------------------------------------------

// $( ".photo" ).each(function( index ) {
//   var randomW = Math.floor(120*Math.random());
//   var randomH = Math.floor(180*Math.random());
//   $(this).css({'top' : randomH + '%'});
//   $(this).css({'left' : randomW + '%'});
// });

$(".photo").each(function () {
    var randomtop = Math.floor(Math.random() * ($('body').height() - $(this).height() - 40)),
        randomleft = Math.floor(Math.random() * ($('body').width() - $(this).width() - 40)),
        randomzindex = Math.floor(Math.random() * 30),
        randomwidth = Math.floor(Math.random() * 400) + 200;
    $(this).css({
        "top": randomtop,
        "left": randomleft,
        "width": randomwidth
    });
});

$( ".sub-toggle" ).click(function() {
  $( ".sub-nav" ).toggleClass('active');
  $( "header" ).toggleClass('active');
});

$( ".bib-link.desk" ).click(function() {
  $( ".home-bib" ).addClass('active');
});

$( function() {
  $( ".stackable" ).draggable({
    stack: ".stackable",
    cursor: "grabbing"
  });
  $( ".draggable" ).draggable();
} );



// VIEWPORT CHECK
const mediaQuery = window.matchMedia('(max-width: 900px)')

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    console.log('Mobile')
    device = "mobile";
  } else {
    console.log('Desktop')
    device = "desk";
  }
}

mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

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