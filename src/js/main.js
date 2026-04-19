document.addEventListener('DOMContentLoaded', function () {
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true, // Loop through slides
    
    // If you want pagination (bullets)
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // If you want navigation buttons
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // If you want a scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});

// Mozilla, Opera, Webkit 
if ( document.addEventListener ) {
  document.addEventListener( "DOMContentLoaded", function(){
    document.removeEventListener( "DOMContentLoaded", arguments.callee, false);
    domReady();
  }, false );

// If IE event model is used
} else if ( document.attachEvent ) {
  // ensure firing before onload
  document.attachEvent("onreadystatechange", function(){
    if ( document.readyState === "complete" ) {
      document.detachEvent( "onreadystatechange", arguments.callee );
      domReady();
    }
  });
}

//
function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

var isInViewport = function (elem) {
    rect = elem.getBoundingClientRect();
  
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    // http://stackoverflow.com/questions/325933/determine-whether-two-date-ranges-overlap
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

    return (vertInView && horInView);
};

function forEachVisibleItem(nodeList) {
  for (i = 0; i < nodeList.length; ++i) {
    if (isInViewport(nodeList[i]) && !nodeList[i].hasAttribute("data-visible")) {
      nodeList[i].setAttribute("data-visible", "true");
    }
  }
}

function domReady () {
  document.body.className += " javascript";
  var revealWhenVisible = document.querySelectorAll('.js-reveal'), i;
  var revealChildrenWhenVisible = document.querySelectorAll('.js-reveal .reveal-child'), i;
  forEachVisibleItem(revealWhenVisible);
  forEachVisibleItem(revealChildrenWhenVisible);

  window.addEventListener('scroll', function (event) {
    forEachVisibleItem(revealWhenVisible);
    forEachVisibleItem(revealChildrenWhenVisible);
  }, false);
}
