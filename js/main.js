/* -------------------------------------
		CUSTOM FUNCTION WRITE HERE
-------------------------------------- */
jQuery(document).ready(function() {
	"use strict";
	/* -------------------------------------
			HOME MAIN SLIDER
	-------------------------------------- */
	jQuery("#tg-homeslider").owlCarousel({
		autoPlay: true,
		singleItem:true,
		navigation : true,
		pagination : true,
		navigationText: [
			"<span class='tg-btnsliderprev'>prev</span>",
			"<span class='tg-btnslidernext'>next</span>"
		],
	});
	/* -------------------------------------
			COLLAPSE MENU SMALL DEVICES
	-------------------------------------- */
	function collapseMenu(){
		jQuery('.tg-navigation ul li.tg-hasdropdown').prepend('<span class="tg-dropdowarrow"><i class="fa fa-angle-down"></i></span>');
		jQuery('.tg-navigation ul li.tg-hasdropdown span').on('click', function() {
			jQuery(this).next().next().slideToggle(300);
		});
	}
	collapseMenu();
	/* -------------------------------------
			CLASSES SLIDER
	-------------------------------------- */
	jQuery("#tg-classesslider").owlCarousel({
		autoPlay : false,
		slideSpeed : 300,
		navigation : true,
		pagination : false,
		navigationText: [
			"<span class='tg-btncurveprev'><i class='icon-right-arrow'></i></span>",
			"<span class='tg-btncurvenext'><i class='icon-right-arrow2'></i></span>"
		],
		itemsCustom : [
			[0, 1],
			[439, 1],
			[480, 2],
			[640, 2],
			[768, 2],
			[1200, 2],
		],
	});
	/* -------------------------------------
			SUCCESS STORIES SLIDER
	-------------------------------------- */
	jQuery("#tg-successstoriesslider").owlCarousel({
		autoPlay : false,
		slideSpeed : 300,
		navigation : true,
		pagination : false,
		navigationText: [
			"<span class='tg-btncurveprev'><i class='icon-right-arrow'></i></span>",
			"<span class='tg-btncurvenext'><i class='icon-right-arrow2'></i></span>"
		],
		itemsCustom : [
			[0, 1],
			[439, 1],
			[480, 2],
			[640, 2],
			[992, 3],
			[1200, 3],
		],
	});
	/* -------------------------------------
			TRAINER SLIDER
	-------------------------------------- */
	jQuery("#tg-trainersslider").owlCarousel({
		autoPlay : false,
		slideSpeed : 300,
		navigation : true,
		pagination : false,
		navigationText: [
			"<span class='tg-btncurveprev'><i class='icon-right-arrow'></i></span>",
			"<span class='tg-btncurvenext'><i class='icon-right-arrow2'></i></span>"
		],
		itemsCustom : [
			[0, 1],
			[439, 1],
			[480, 2],
			[640, 3],
			[768, 3],
			[1200, 4],
		],
	});
	/* -------------------------------------
			TRAINER SLIDER
	-------------------------------------- */
	jQuery("#tg-trainersslider-v2").owlCarousel({
		autoPlay : false,
		slideSpeed : 300,
		navigation : false,
		pagination : false,
		navigationText: [
			"<span class='tg-btncurveprev'><i class='icon-right-arrow'></i></span>",
			"<span class='tg-btncurvenext'><i class='icon-right-arrow2'></i></span>"
		],
		itemsCustom : [
			[0, 1],
			[480, 1],
			[568, 2],
			[639, 3],
			[767, 2],
			[1200, 3],
		],
	});
	/* -------------------------------------
			PRODUCT SLIDER
	-------------------------------------- */
	jQuery("#tg-productsslider").owlCarousel({
		autoPlay : false,
		slideSpeed : 300,
		navigation : true,
		pagination : false,
		navigationText: [
			"<span class='tg-btncurveprev'><i class='icon-right-arrow'></i></span>",
			"<span class='tg-btncurvenext'><i class='icon-right-arrow2'></i></span>"
		],
		itemsCustom : [
			[0, 1],
			[480, 1],
			[640, 2],
			[768, 3],
			[1200, 4],
		],
	});
	/* -------------------------------------
			RELATED PRODUCT SLIDER
	-------------------------------------- */
	jQuery("#tg-relatedproductsslider").owlCarousel({
		autoPlay : false,
		slideSpeed : 300,
		navigation : false,
		pagination : false,
		itemsCustom : [
			[0, 1],
			[480, 1],
			[767, 2],
			[1200, 3],
		],
	});
	/* -------------------------------------
			PRODUCT SLIDER
	-------------------------------------- */
	jQuery("#tg-productsingleslider").owlCarousel({
		autoPlay : false,
		singleItem:true,
		slideSpeed : 300,
		navigation : false,
		pagination : true,
	});
	/*------------------------------------------
			PRODUCT INCREASE
	------------------------------------------*/
	jQuery('.tg-minus').on('click', function () {
		jQuery('.tg-quantity1').val(parseInt(jQuery('.tg-quantity1').val(), 10) - 1);
	});
	jQuery('.tg-plus').on('click', function () {
		jQuery('.tg-quantity1').val(parseInt(jQuery('.tg-quantity1').val(), 10) + 1);
	});
	/* -------------------------------------
			NEWS SLIDER
	-------------------------------------- */
	jQuery("#tg-newsarticleslider").owlCarousel({
		autoPlay : false,
		singleItem: true,
		slideSpeed : 300,
		navigation : true,
		pagination : false,
		navigationText: [
			"<span class='tg-btncurveprev'><i class='icon-right-arrow'></i></span>",
			"<span class='tg-btncurvenext'><i class='icon-right-arrow2'></i></span>"
		]
	});
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	jQuery("#tg-location-map").gmap3({
		marker: {
			address: "Rua tajipuru 235, São Paulo, Brasil",
			options: {
				title: "Dia De Treino",
				icon: "images/icon.png",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	jQuery("#tg-location-map-v2").gmap3({
		marker: {
			address: "Rua tajipuru 235, São Paulo, Brasil",
			options: {
				title: "Dia De Treino",
				icon: "images/icon.png",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	jQuery("#tg-location-map-v3").gmap3({
		marker: {
			address: "Rua tajipuru 235, São Paulo, Brasil",
			options: {
				title: "Dia De Treino",
				icon: "images/icon.png",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	jQuery("#tg-location-map-v4").gmap3({
		marker: {
			address: "Rua tajipuru 235, São Paulo, Brasil",
			options: {
				title: "Dia De Treino",
				icon: "images/icon.png",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/* -------------------------------------
			Google Map
	-------------------------------------- */
	jQuery("#tg-location-map-v5").gmap3({
		marker: {
			address: "Rua tajipuru 235, São Paulo, Brasil",
			options: {
				title: "Dia De Treino",
				icon: "images/icon.png",
			}
		},
		map: {
			options: {
				zoom: 16,
				scrollwheel: false,
				disableDoubleClickZoom: true,
			}
		}
	});
	/* ---------------------------------------
			FULL PAGE SEARCH
	--------------------------------------- */
	jQuery('a[href="#tg-search"]').on('click', function(event) {
		event.preventDefault();
		jQuery('#tg-search').addClass('open');
		jQuery('#tg-search > form > fieldset > input[type="search"]').focus();
	});
	jQuery('#tg-search, #tg-search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			jQuery(this).removeClass('open');
		}
	});
	jQuery('form').submit(function(event) {
		event.preventDefault();
		return false;
	});
	jQuery('.tg-search button.close').on('click', function(){
		jQuery(this).parents('.tg-search').removeClass('open');
	});
	/* -------------------------------------
			COUNTER
	-------------------------------------- */
	try {
		jQuery('.tg-counterarea').appear(function () {
			jQuery('.tg-timer').countTo()
		});
	} catch (err) {}
	/* -------------------------------------
			FEE RANGE SLIDER
	-------------------------------------- */
	function feeRangeslider(){
		jQuery("#tg-productrangeslider").slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				jQuery( "#tg-productrangeamount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		jQuery( "#tg-productrangeamount" ).val( "$" + jQuery( "#tg-productrangeslider" ).slider( "values", 0 ) + " - $" + jQuery( "#tg-productrangeslider" ).slider( "values", 1 ) );
	}
	feeRangeslider();
	/* -------------------------------------
			PROGRESS BAR
	-------------------------------------- */
	try {
		jQuery('#tg-ourskill').appear(function () {
			jQuery('.tg-skillholder').each(function () {
				jQuery(this).find('.tg-skillbar').animate({
					width: jQuery(this).attr('data-percent')
				}, 2500);
			});
		});
	} catch (err) {}
	/*--------------------------------------
				COMMING SOON COUNTER
		--------------------------------------*/
		jQuery('#tg-comming-countdown').countdown({
			date: '10/5/2019 13:41:59',
			offset: -100,
			day: 'Day',
			days: 'Days'
		},function () {
			alert('Done!');
		});
	/* -------------------------------------
			PRETTY PHOTO GALLERY
	-------------------------------------- */
	jQuery("a[data-rel]").each(function () {
		jQuery(this).attr("rel", jQuery(this).data("rel"));
	});
	jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
		animation_speed: 'normal',
		theme: 'dark_square',
		slideshow: 3000,
		autoplay_slideshow: false,
		social_tools: false
	});
	/* -------------------------------------
			CHECKBOX SCROLL
	-------------------------------------- */
	jQuery(".tg-themescrollbar").mCustomScrollbar({
		axis:"y",
	});
	/* -------------------------------------
			TESTIMONIALS SLIDER
	-------------------------------------- */
	function syncSlider(){
		var sync1 = jQuery("#tg-testimonialcontentslider");
		var sync2 = jQuery("#tg-testimonialimgslider");
		sync1.owlCarousel({
			singleItem : true,
			slideSpeed : 1000,
			navigation: false,
			pagination:true,
			afterAction : syncPosition,
			responsiveRefreshRate : 200,
			navigationText: ["<i class='fa fa-angle-left tg-prev'></i>","<i class='fa fa-angle-right tg-next'></i>"]
		});
		sync2.owlCarousel({
			items						:4,
			itemsDesktop				:[1400,4],
			itemsDesktopSmall			:[991,3],
			itemsTablet					:[767,4],
			itemsMobile					:[479,2],
			pagination					:false,
			responsiveRefreshRate		:100,
			afterInit : function(el){
				el.find(".owl-item").eq(0).addClass("tg-active");
			}
		});
		function syncPosition(el){
			var current = this.currentItem;
			jQuery("#tg-testimonialimgslider")
				.find(".owl-item")
				.removeClass("tg-active")
				.eq(current)
				.addClass("tg-active")
			if(jQuery("#tg-testimonialimgslider").data("owlCarousel") !== undefined){
				center(current)
			}
		}
		jQuery("#tg-testimonialimgslider").on("click", ".owl-item", function(e){
			e.preventDefault();
			var number = jQuery(this).data("owlItem");
			sync1.trigger("owl.goTo",number);
		});
		function center(number){
			var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
			var num = number;
			var found = false;
			for(var i in sync2visible){
				if(num === sync2visible[i]){
					var found = true;
				}
			}
			if(found===false){
				if(num>sync2visible[sync2visible.length-1]){
					sync2.trigger("owl.goTo", num - sync2visible.length+2)
				}else{
					if(num - 1 === -1){
						num = 0;
					}
					sync2.trigger("owl.goTo", num);
				}
			} else if(num === sync2visible[sync2visible.length-1]){
				sync2.trigger("owl.goTo", sync2visible[1])
			} else if(num === sync2visible[0]){
				sync2.trigger("owl.goTo", num-1)
			}
		}
	}
	syncSlider();
	/* -------------------------------------
			HOME BANNER INPUT COLOR
	-------------------------------------- */
	jQuery('.tg-formgetfreeebook [placeholder]').focus(function() {
		var input = jQuery(this);
		if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('tg-whiteplaceholder');
		}
	}).blur(function() {
		var input = jQuery(this);
		if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('tg-whiteplaceholder');
			input.val(input.attr('placeholder'));
		}
	}).blur();
	jQuery('.tg-formgetfreeebook [placeholder]').parents('form').submit(function() {
		jQuery(this).find('.tg-formgetfreeebook [placeholder]').each(function() {
			var input = jQuery(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
			}
		})
	});
});