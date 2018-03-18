export function scroolToTop () {
    $(document).ready(function() {
		/*
			var defaults = {
			containerID: 'toTop', // fading element id
			containerHoverID: 'toTopHover', // fading element hover id
			scrollSpeed: 1200,
			easingType: 'linear' 
			};
		*/								
		$().UItoTop({ easingType: 'easeOutQuart' });
		});
}

export function smoothScroll () {
    jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});
}

export function typeAnimation() {
    $(function(){
        
                    $("#typed").typed({
                        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
                        stringsElement: $('#typed-strings'),
                        typeSpeed: 30,
                        backDelay: 500,
                        loop: false,
                        contentType: 'html', // or text
                        // defaults to false for infinite loop
                        loopCount: false,
                        callback: function(){ foo(); },
                        resetCallback: function() { newTyped(); }
                    });
        
                    $(".reset").click(function(){
                        $("#typed").typed('reset');
                    });
        
                });
        
                function newTyped(){ /* A new typed object */ }
        
                function foo(){ console.log("Callback"); }
}

export function magicPop() {
    $(document).ready(function() {
        $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
        });

        });
}

export function responsiveSlides() {
    $(function () {
        // Slideshow 4
       $("#slider3").responsiveSlides({
           auto: true,
           pager: false,
           nav: true,
           speed: 500,
           namespace: "callbacks",
           before: function () {
       $('.events').append("<li>before event fired.</li>");
       },
       after: function () {
           $('.events').append("<li>after event fired.</li>");
           }
           });
           });
}

export function cmOverlay () {
    $(document).ready(function(){
        $('.cm-overlay').cmOverlay();
    });
}

export function navigationBar () {
    $(document).ready(function () {
        $('.mobile-nav-button').on('click', function() {
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).toggleClass( "mobile-nav-button__line--1");
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).toggleClass( "mobile-nav-button__line--2");  
        $( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).toggleClass( "mobile-nav-button__line--3");  
        
        $('.mobile-menu').toggleClass('mobile-menu--open');
        return false;
      }); 
      });
}