$(document).ready(function(){

	alert('There is an update for the AIPPM delegates, kindly check the main menu. Any one position paper has to be submitted on 10th October. Position Paper for second agenda has to be submitted on the first day of conference');

	$.fn.toggleAttr = function(attr, attr1, attr2) {
	  return this.each(function() {
	   var self = $(this);
	   if (self.attr(attr) == attr1)
	     self.attr(attr, attr2);
	    else
	     self.attr(attr, attr1);
	  });
	};

	$('.know').click(function(){
		$(document.body).animate({
			scrollTop: $('.msg').offset().top
		}, 900, $.bez([0.940, 0.035, 0.570, 0.570]))
	})

	$('.story').click(function(){
		$(document.body).animate({
			scrollTop: $('.third').offset().top
		}, 900, $.bez([0.940, 0.035, 0.570, 0.570]))
	})

	/*$('.o-s').click(function(){
		$('rect').toggleAttr('class', 'white', 'none');
		$('.coming').toggleClass('white')
		$('.menu').toggleClass('anim');
		setTimeout(function(){
			$(document.body).animate({
			scrollTop: $('.third').offset().top
		}, 900, $.bez([0.940, 0.035, 0.570, 0.570]))
		}, 500)
	})*/

	$('.reggg').click(function(){
		$('rect').toggleAttr('class', 'white', 'none');
		$('.coming').toggleClass('white')
		$('.menu').toggleClass('anim');
		setTimeout(function(){
			$(document.body).animate({
			scrollTop: $('.contact').offset().top
		}, 900, $.bez([0.940, 0.035, 0.570, 0.570]))
		}, 500)
	})

	$('.abb').click(function(){
		$('rect').toggleAttr('class', 'white', 'none');
		$('.coming').toggleClass('white')
		$('.menu').toggleClass('anim');
		setTimeout(function(){
			$(document.body).animate({
			scrollTop: $('.second').offset().top
		}, 900, $.bez([0.940, 0.035, 0.570, 0.570]))
		}, 500)
	})

	$('.o-s').click(function(){
		$('rect').toggleAttr('class', 'white', 'none');
		$('.coming').toggleClass('white')
		$('.menu').toggleClass('anim');
		setTimeout(function(){
			$(document.body).animate({
			scrollTop: $('.third').offset().top
		}, 900, $.bez([0.940, 0.035, 0.570, 0.570]))
		}, 500)
	})

	$('#Capa_1').click(function(){
		//$('.square').toggleClass('anime');
		setTimeout(function(){
			setTimeout(function(){
				$('rect').toggleAttr('class', 'white', 'none');
				$('.coming').toggleClass('white')
			}, 800)

			setTimeout(function(){
				$('.menu .menu-buttons').addClass('m-anim')
				$('.menu .other-d .o-b, .other-d-resp .o-b').addClass('o-anim')
			}, 1100)

			//$('rect').css('fill', 'white')
			$('.menu').toggleClass('anim');
		}, 200)
	})

	$('.register').click(function(){
		alert('For Individual registration, kindly check the main menu.');
	})

	$(window).scroll(function(){
		var win = $(this).scrollTop();

		if (win >= 1300 || win >= $(window).height()*2) {
			setTimeout(function(){
				$('.ab').addClass('ab-anim');
				setTimeout(function(){
					$('.ab2').addClass('ab-anim');
					setTimeout(function(){
						$('.story, .down').addClass('ab-anim');
					}, 1000)
				}, 800)
			}, 600)
		};
	})

	$(window).scroll(function(){
		var wind = $(this).scrollTop();

		if (wind >= 800 || win >= $(window).height()) {
			$('.cab').addClass('ab-anim');
			setTimeout(function(){
				$('.princi-w').addClass('ab-anim');
			}, 1000)
		};
	})



})