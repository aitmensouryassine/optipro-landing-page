$(document).ready(function () {
	$(".portfolio-slider").owlCarousel({
		loop: false,
		center: false,
		margin: 100,
		autoplay: true,
		items: 2,
		dots: false,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: false,
			},
			600: {
				items: 2,
				nav: false,
			},
			991: {
				items: 2,
				nav: false,
			},
			1024: {
				items: 2,
				nav: false,
			},
		},
	});

	$(".testimonial").owlCarousel({
		loop: true,
		center: true,
		autoplay: true,
		items: 1,
		dots: false,
		margin: 10,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: false,
			},
			600: {
				items: 1,
				nav: false,
			},
			991: {
				items: 1,
				nav: false,
			},
			1024: {
				items: 1,
				nav: false,
			},
		},
	});

	$(".trusted-logos").owlCarousel({
		loop: false,
		items: 4,
		dots: false,
		autoplay: false,
		autoplayHoverPause: true,
		nav: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2,
				nav: false,
			},
			600: {
				items: 3,
				nav: false,
			},
			991: {
				items: 3,
				nav: false,
			},
			1024: {
				items: 4,
				nav: false,
			},
		},
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$("header").addClass("sticky");
		} else {
			$("header").removeClass("sticky");
		}
	});
	// copyrights Year Auto-update
	function newDate() {
		return new Date().getFullYear();
	}
	document.onload = document.getElementById("autodate").innerHTML = +newDate();

	$("#plan1").html("199");
	$("#plan2").html("499");
	$("#plan3").html("1499");
	$("#flexSwitchCheckChecked").click(function () {
		if (this.checked) {
			$("#plan1").html("199");
			$("#plan2").html("499");
			$("#plan3").html("1499");
		} else {
			$("#plan1").html("39");
			$("#plan2").html("99");
			$("#plan3").html("299");
		}
	});
});
