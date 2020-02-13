$(document).ready(function(){
	$('.jcc, .ecosoc, .sc, .aippm, .hrc').hide();
	var k = 0;
	$.fn.toggleAttr = function(attr, attr1, attr2) {
	  return this.each(function() {
	   var self = $(this);
	   if (self.attr(attr) == attr1)
	     self.attr(attr, attr2);
	    else
	     self.attr(attr, attr1);
	  });
	};

	$('.ga').addClass('curr')
	$('#Capa_1').click(function(){
		$('.resp-menu').toggleClass('anim')
		setTimeout(function(){
				$('rect').toggleAttr('class', 'white', 'none');
			}, 800)
	})

	/*$('.resp-menu').toggleClass('anim');*/

	$('.resp-menu .resp-button').click(function(){
		setTimeout(function(){
			$('rect').toggleAttr('class', 'white', 'none');
		}, 800)
		$('.resp-menu').toggleClass('anim');
		var x = $(this).index();
		var h = x + 5;
		setTimeout(function(){
			$('.curr').fadeOut(500)
			setTimeout(function(){
				$('.main .c:nth-child('+ h +')').fadeIn(500)
				setTimeout(function(){
					$('.main .c:nth-child('+ h +')').addClass('curr')
				}, 500)
			}, 500)
		}, 500)
	})

	$('.menu button').click(function(){
		var x = $(this).index();
		var h = x + 5;
		setTimeout(function(){
			$('.curr').fadeOut(500)
			setTimeout(function(){
				$('.main .c:nth-child('+ h +')').fadeIn(500)
				setTimeout(function(){
					$('.main .c:nth-child('+ h +')').addClass('curr')
				}, 500)
			}, 500)
		}, 500)
	})
})