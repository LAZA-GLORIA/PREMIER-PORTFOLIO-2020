//Le document est la page web

$(document).ready(function(){
    /** $('#slides').superslides({      //On a récupérer l'id slide
      animation: 'fade',         // https://github.com/nicinabox/superslides
      play: 10000,
     pagination: false
    }); **/
    
     $('#slides').superslides();
    
    
    window.onload = function() {
    let tl = new TimelineMax({paused: true});

    TweenMax.to('.boutonAccueil', 1.5, {
        duration: 2.5, 
        ease: "bounce.out", 
        y: -100 });
        
     TweenMax.from('.nom', 1.5, {
                x: -200,
                });
        
        
    }

    let typed = new Typed(".typed", {
        strings: ["This website", "needs", "a review"],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    // let typed2 = new Typed(".typed", {
    //   strings: ["07 83 60 38 02"],
    //    loop: false
    //});

    $('.owl-carousel').owlCarousel({
        loop:true,
        //margin:10,
        //nav:true,   don't need
        itemsPortfolio: 5,
        responsive:{
            0:{
                items:1
            },
            300:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });

     let competencesTopOffset = $(".competencesSection").offset().top;
	//let statsTopOffset = $(".statsSection").offset().top;
	let countUpFinished = false;
	$(window).scroll(function() {

		if(!countUpFinished && window.pageYOffset > competencesTopOffset - $(window).height() + 400) {

			$('.chart').easyPieChart({
		        easing: 'easeInOut',
		        barColor: '#333',
		        trackColor: false,
		        scaleColor: false,
		        lineWidth: 4,
		        size: 152,
		        onStep: function(from, to, percent) {
		        	$(this.el).find('.percent').text(Math.round(percent));
		        }
            })
            
            countUpFinished = true;
            
            let tl = new TimelineMax({paused: true});

            TweenMax.from('.h2', 1.5, {
                 y: -50,
            })

		}
	});



    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*', //filter that's applied right from the start is projets ici
        animationOptions: { // les options des animations
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current"); //this les autres elements qu'on veut cliquer autre que current

        let selector = $(this).attr("data-filter"); //et on met la valeur de notre data-fiter qu'on a récupéré dans notre isotope que l'on appelle en bas
    
        $(".itemsPortfolio").isotope({
            filter: selector, //* correspond au filter Projet et on va remplacer donc par selector
            animationOptions: { // les options des animations
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });

        return false; //veut dire ne rien faire d'autre quand on fait un click 
        
    });

    const nav = $("#idMenu");
    const navTop = nav.offset().top; //navtop characterized when the page loads so from the start we know the position
                                    // of the navbar grace à offset
    $(window).on("scroll", stickyidMenu);
    
    function stickyidMenu() {

        let body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px"); //pour que le scroll soit smooth
            body.addClass("fixedNav");
        }
        else {
            body.css("padding-top", 0); 
            body.removeClass("fixedNav");
        }
    }



    $(".boutonAccueil").click(function(e){
		if($(window).width()) $('html, body').animate( { scrollTop: ($(window).height()) }, 500 ); // Go
	});

    
});