$(window).on('load', function(){

	"use strict";
 
	
	/* ========================================================== */
	/*   Owl Carousel                                             */
	/* ========================================================== */
	
	$('#owl1').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	$('#owl2').owlCarousel({
	    center:true,
	    autoplay:true,
	    loop:true,
	    margin:40,
	    nav:false,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:4,
	            nav:false,
	            loop:true
	        }
	    }
	})
 
	/* ========================================================== */
	/*   Navigation Background Color                              */
	/* ========================================================== */
	
	$(window).on('scroll', function() {
		if($(this).scrollTop() > 450) {
			$('.navbar-fixed-top').addClass('opaque');
		} else {
			$('.navbar-fixed-top').removeClass('opaque');
		}
	});
 
	
	/* ========================================================== */
	/*   Hide Responsive Navigation On-Click                      */
	/* ========================================================== */
	
	  $(".navbar-nav li a").on('click', function(event) {
	    $(".navbar-collapse").collapse('hide');
	  });

	
	/* ========================================================== */
	/*   Navigation Color                                         */
	/* ========================================================== */
	
	$('#navbar-collapse-02').onePageNav({
		filter: ':not(.external)'
	});


	/* ========================================================== */
	/*   SmoothScroll                                             */
	/* ========================================================== */
	
	$(".nav li a, a.scrool").on('click', function(e) {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -70}, 1000);
			return false;
		
	});


	/* ========================================================== */
	/*   Newsletter                                               */
	/* ========================================================== */
	
	$('.newsletter-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'email':$('input[name="nf_email"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p.newsletter_success_box').show();
					});
				});
				e.preventDefault();
			}
		});
	});	
	

	/* ========================================================== */
	/*   Contact                                                  */
	/* ========================================================== */
	$('#contact-form').each( function(){
		var form = $(this);
		//form.validate();
		form.submit(function(e) {
			if (!e.isDefaultPrevented()) {
				jQuery.post(this.action,{
					'names':$('input[name="contact_names"]').val(),
					'email':$('input[name="contact_email"]').val(),
					'phone':$('input[name="contact_phone"]').val(),
					'message':$('textarea[name="contact_message"]').val(),
				},function(data){
					form.fadeOut('fast', function() {
						$(this).siblings('p').show();
					});
				});
				e.preventDefault();
			}
		});
	})
});

	/* ========================================================== */
	/*   Popup-Gallery                                            */
	/* ========================================================== */
	$('.popup-gallery').find('a.popup1').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
	
	$('.popup-gallery').find('a.popup2').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup3').magnificPopup({
		type: 'image',
		gallery: {
		  enabled:true
		}
	}); 
 
	$('.popup-gallery').find('a.popup4').magnificPopup({
		type: 'iframe',
		gallery: {
		  enabled:false
		}
	});  
 

	$('body').waitForImages(function() {
        // $(".loader").fadeOut();
        // $(".preloader").fadeOut("slow");
        $(".loader").fadeOut("slow");
	});
	
	
    var animationData = {"v":"5.6.5","fr":30,"ip":0,"op":60,"w":250,"h":250,"nm":"Logo","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":2,"ty":3,"nm":"Null 1","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":30,"s":[360]},{"t":59,"s":[0]}],"ix":10},"p":{"a":0,"k":[600,600,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Layer 1 Outlines","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,-1.764,0],"ix":2},"a":{"a":0,"k":[527.333,419.706,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[104.75,91.72],[0,0],[0,0],[-5.02,-165.124],[0,0],[0,0]],"o":[[-31.684,-135.653],[0,0],[0,0],[140.767,86.539],[0,0],[0,0],[0,0]],"v":[[525.862,-129.746],[314.654,-481.456],[27.405,-378.73],[27.405,-337.571],[261.652,66.895],[296.219,87.259],[527.083,-124.524]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ind":1,"ty":"sh","ix":2,"ks":{"a":0,"k":{"i":[[0,0],[27.055,-136.573],[0,0],[0,0],[-140.48,86.902],[0,0],[0,0]],"o":[[-101.637,95.273],[0,0],[0,0],[4.572,-165.182],[0,0],[0,0],[0,0]],"v":[[-328.103,-467.216],[-527.083,-108.447],[-294.499,88.956],[-258.852,68.374],[-25.702,-336.723],[-25.345,-376.841],[-324.191,-470.882]],"c":true},"ix":2},"nm":"Path 2","mn":"ADBE Vector Shape - Group","hd":false},{"ind":2,"ty":"sh","ix":3,"ks":{"a":0,"k":{"i":[[133.323,40.379],[0,0],[0,0],[0,0],[-145.342,78.64],[0,0],[0,0]],"o":[[0,0],[0,0],[0,0],[145.498,78.205],[0,0],[0,0],[-131.809,44.847]],"v":[[-193.376,441.077],[-198.507,439.522],[-266.488,133.692],[-231.569,113.941],[235.831,113.308],[271.482,133.891],[216.82,434.014]],"c":true},"ix":2},"nm":"Path 3","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"mm","mm":1,"nm":"Merge Paths 1","mn":"ADBE Vector Filter - Merge","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999880323,0.999999820485,0.999999880323,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[527.333,481.706],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":5,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"hexality_logo_white","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[125,125,0],"ix":2},"a":{"a":0,"k":[600,600,0],"ix":1},"s":{"a":0,"k":[20.167,20.167,100],"ix":6}},"ao":0,"w":1200,"h":1200,"ip":0,"op":60,"st":0,"bm":0}],"markers":[]}
    var params = {
        container: document.getElementById('lottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: animationData
    };

    var anim;

		anim = lottie.loadAnimation(params);
		



		jQuery(document).ready(function($){
			//trigger the animation - open modal window
			$('[data-type="modal-trigger"]').on('click', function(){
				var actionBtn = $(this),
					scaleValue = retrieveScale(actionBtn.next('.cd-modal-bg'));
				
				actionBtn.addClass('to-circle');
				actionBtn.next('.cd-modal-bg').addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
				});
		
				//if browser doesn't support transitions...
				if(actionBtn.parents('.no-csstransitions').length > 0 ) animateLayer(actionBtn.next('.cd-modal-bg'), scaleValue, true);
			});
		
			//trigger the animation - close modal window
			$('.cd-section .cd-modal-close').on('click', function(){
				closeModal();
			});
			$(document).keyup(function(event){
				if(event.which=='27') closeModal();
			});
		
			$(window).on('resize', function(){
				//on window resize - update cover layer dimention and position
				if($('.cd-section.modal-is-visible').length > 0) window.requestAnimationFrame(updateLayer);
			});
		
			function retrieveScale(btn) {
				var btnRadius = btn.width()/2,
					left = btn.offset().left + btnRadius,
					top = btn.offset().top + btnRadius - $(window).scrollTop(),
					scale = scaleValue(top, left, btnRadius, $(window).height(), $(window).width());
		
				btn.css('position', 'fixed').velocity({
					top: top - btnRadius,
					left: left - btnRadius,
					translateX: 0,
				}, 0);
		
				return scale;
			}
		
			function scaleValue( topValue, leftValue, radiusValue, windowW, windowH) {
				var maxDistHor = ( leftValue > windowW/2) ? leftValue : (windowW - leftValue),
					maxDistVert = ( topValue > windowH/2) ? topValue : (windowH - topValue);
				return Math.ceil(Math.sqrt( Math.pow(maxDistHor, 2) + Math.pow(maxDistVert, 2) )/radiusValue);
			}
		
			function animateLayer(layer, scaleVal, bool) {
				layer.velocity({ scale: scaleVal }, 400, function(){
					$('body').toggleClass('overflow-hidden', bool);
					(bool) 
						? layer.parents('.cd-section').addClass('modal-is-visible').end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')
						: layer.removeClass('is-visible').removeAttr( 'style' ).siblings('[data-type="modal-trigger"]').removeClass('to-circle');
				});
			}
		
			function updateLayer() {
				var layer = $('.cd-section.modal-is-visible').find('.cd-modal-bg'),
					layerRadius = layer.width()/2,
					layerTop = layer.siblings('.btn').offset().top + layerRadius - $(window).scrollTop(),
					layerLeft = layer.siblings('.btn').offset().left + layerRadius,
					scale = scaleValue(layerTop, layerLeft, layerRadius, $(window).height(), $(window).width());
				
				layer.velocity({
					top: layerTop - layerRadius,
					left: layerLeft - layerRadius,
					scale: scale,
				}, 0);
			}
		
			function closeModal() {
				var section = $('.cd-section.modal-is-visible');
				section.removeClass('modal-is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
					animateLayer(section.find('.cd-modal-bg'), 1, false);
				});
				//if browser doesn't support transitions...
				if(section.parents('.no-csstransitions').length > 0 ) animateLayer(section.find('.cd-modal-bg'), 1, false);
			}
		});
		
		
		
		
		


