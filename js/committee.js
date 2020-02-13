$(document).ready(function(){
	alert("Kindly swipe with mouse to change committee.");
	$('polygon, #Capa_1').hide();
	$(".holder").dragend({
        afterInitialize: function(){
          this.container.style.visibility = "visible";
        }, onSwipeEnd: function() {
          var first = this.pages[0],
              last = this.pages[this.pages.length - 1];

          $("#prev, #next").removeAttr('class', "deactivated");
          $(".nav li").removeClass("active");

          if (first === this.activeElement) {
            $("#prev").attr('class', "deactivated")
          };

          if (last === this.activeElement) {
            $("#next").attr('class', "deactivated")
          }

          $(".nav li").eq(this.page).addClass("active");

        }
     });

	$("#prev").click(function() {
        $(".holder").dragend("right");
      });

      $("#next").click(function() {
        $(".holder").dragend("left");
      });
		
	$.fn.toggleAttr = function(attr, attr1, attr2) {
	  return this.each(function() {
	   var self = $(this);
	   if (self.attr(attr) == attr1)
	     self.attr(attr, attr2);
	    else
	     self.attr(attr, attr1);
	  });
	};

	/*$('#Capa_1').click(function(){
		//$('.square').toggleClass('anime');
		setTimeout(function(){
			setTimeout(function(){
				$('rect').toggleAttr('class', 'white', 'none');
			}, 800)
			//$('rect').css('fill', 'white')
			$('.menu').toggleClass('anim');
		}, 300)
	})*/

	$('#Ebene_1, #Ebene_2, #Ebene_3, #Ebene_4, #Ebene_5, #Ebene_6').click(function(){
		$(document.body).animate({
			scrollTop: $('.second').offset().top
		}, 500, $.bez([0.940, 0.035, 0.570, 0.570]))
	})

	$('.know').click(function(){
		//$('#arrow-back path').toggleAttr('class', 'white', 'none');
		$('#arrow-back path').attr('class', 'none white');
		$(this).fadeOut(600)
		$('#next, #prev').fadeOut(500);
		var $lo = $(this).parent();
		var $com = $lo.find('.committee');
		var $dps = $lo.find('.dps');
		var $q = $lo.find('.quote');
		var $dd = $lo.find('polygon')
		var $kk = $lo.find('#Ebene_1')
		$kk.animate({
			"top": "890px" 
		}, 500)
		$('.main, .holder, .dragend-page').animate({
			"height": "2053px"
		}, 600)
		setTimeout(function(){
			$('#Capa_1').fadeIn(300)
			$('.second').fadeIn(500)
			$dd.fadeIn(500)
			$com.addClass('comm-anim')
			$dps.addClass('dps-anim')
			$q.addClass('quote-anim')
			$lo.addClass('opened')
		}, 1400)
	})

	//From here on it is WET code 

	var $ga = $('#ga').parent();
	var $sc = $('#sc').parent();
	var $hr = $('#hr').parent();
	var $ec = $('#ec').parent();
	var $ai = $('#ai').parent();
	var $jc = $('#jc').parent();

	//DPS

	$dga = $ga.find('.dps')
	$dsc = $sc.find('.dps')
	$dhr = $hr.find('.dps')
	$dec = $ec.find('.dps')
	$dai = $ai.find('.dps')
	$djc = $jc.find('.dps')

	//Quote

	$qga = $ga.find('.quote')
	$qsc = $sc.find('.quote')
	$qhr = $hr.find('.quote')
	$qec = $ec.find('.quote')
	$qai = $ai.find('.quote')
	$qjc = $jc.find('.quote')

	//Committee

	$cga = $ga.find('.committee')
	$csc = $sc.find('.committee')
	$chr = $hr.find('.committee')
	$cec = $ec.find('.committee')
	$cai = $ai.find('.committee')
	$cjc = $jc.find('.committee')

	/*

	.comm - > United Nations General Assembly

	.write-up - > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
			cillum dolore eu fugiat nulla pariatur.

	a1 & a2 - > Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod


Downloads/UNGA allotment_UMUN'15.xls











	*/

	$('#Capa_1').click(function(){
		$('.main, .holder').animate({
			"height": "1150px"
		}, 600)
		$('#next, #prev').fadeIn(500);
		$(this).fadeOut(500)
		$('#ga, #sc, #hr, #ec, #ai, #jc').fadeIn(500)
		$cga.removeClass('comm-anim')
		$('.write-up').removeClass('ai-p');
		$csc.removeClass('comm-anim')
		$chr.removeClass('comm-anim')
		$cec.removeClass('comm-anim')
		$cai.removeClass('comm-anim')
		$cjc.removeClass('comm-anim')
		$qga.removeClass('quote-anim')
		$qsc.removeClass('quote-anim')
		$qhr.removeClass('quote-anim')
		$qec.removeClass('quote-anim')
		$qai.removeClass('quote-anim')
		$qjc.removeClass('quote-anim')
		$dga.removeClass('dps-anim')
		$dsc.removeClass('dps-anim')
		$dhr.removeClass('dps-anim')
		$dec.removeClass('dps-anim')
		$dai.removeClass('dps-anim')
		$djc.removeClass('dps-anim')
		$ga.removeClass('opened')
		$sc.removeClass('opened')
		$hr.removeClass('opened')
		$ec.removeClass('opened')
		$ai.removeClass('opened')
		$jc.removeClass('opened')
		$('.second').fadeOut(500)
		$('polygon').fadeOut(500)
	});

	$('#ga').click(function(){
		$('#sc, #hr, #ec, #ai, #jc').fadeIn(500)
		$csc.removeClass('comm-anim')
		$('.write-up').removeClass('ai-p');
		$chr.removeClass('comm-anim')
		$cec.removeClass('comm-anim')
		$cai.removeClass('comm-anim')
		$cjc.removeClass('comm-anim')
		$qsc.removeClass('quote-anim')
		$qhr.removeClass('quote-anim')
		$qec.removeClass('quote-anim')
		$qai.removeClass('quote-anim')
		$qjc.removeClass('quote-anim')
		$dsc.removeClass('dps-anim')
		$dhr.removeClass('dps-anim')
		$dec.removeClass('dps-anim')
		$dai.removeClass('dps-anim')
		$djc.removeClass('dps-anim')
		$sc.removeClass('opened')
		$hr.removeClass('opened')
		$ec.removeClass('opened')
		$ai.removeClass('opened')
		$jc.removeClass('opened')
		$('.second .write-up').html('The United Nations General Assembly is one of the six principal organs of the United Nations and the only one in which all member nations have equal representation. Its powers are to oversee the budget of the United Nations, appoint the non-permanent members to the Security Council, receive reports from other parts of the United Nations and make recommendations in the form of General Assembly Resolutions. It has also established a wide number of subsidiary organs.')
		$('.second .comm').html('United Nations General Assembly');
		$('.second .a1').html('Question of Deployment of Lethal Autonomous Weapons System (LAWS).');
		$('.second .a2').html('Revision and Expansion of Arms Trade Treaty (ATT).');
		$('.downn').attr("href", "Downloads/GA_-Background_guide.pdf");
	})

	$('#sc').click(function(){
		$('#ga, #hr, #ec, #ai, #jc').fadeIn(500)
		$cga.removeClass('comm-anim')
		$('.write-up').removeClass('ai-p');
		$chr.removeClass('comm-anim')
		$cec.removeClass('comm-anim')
		$cai.removeClass('comm-anim')
		$cjc.removeClass('comm-anim')
		$qga.removeClass('quote-anim')
		$qhr.removeClass('quote-anim')
		$qec.removeClass('quote-anim')
		$qai.removeClass('quote-anim')
		$qjc.removeClass('quote-anim')
		$dga.removeClass('dps-anim')
		$dhr.removeClass('dps-anim')
		$dec.removeClass('dps-anim')
		$dai.removeClass('dps-anim')
		$djc.removeClass('dps-anim')
		$ga.removeClass('opened')
		$hr.removeClass('opened')
		$ec.removeClass('opened')
		$ai.removeClass('opened')
		$jc.removeClass('opened')
		$('.second .write-up').html('The United Nations Security Council (UNSC) is one of the six principal organs of the United Nations and is charged with the maintenance of international peace and security. Its powers include the establishment of peacekeeping operations, the establishment of international sanctions, and the authorization of military action through Security Council resolutions; it is the only UN body with the authority to issue binding resolutions to member states.')
		$('.second .comm').html('United Nations Security Council');
		$('.second .a1').html('Assessing the Threat of ISIS.');
		$('.second .a2').html('Humanitarian Crisis in Ukraine.');
		$('.downn').attr("href", "Downloads/SC_BG_1.pdf");
	})

	$('#hr').click(function(){
		$('#sc, #ga, #ec, #ai, #jc').fadeIn(500)
		$csc.removeClass('comm-anim')
		$('.write-up').removeClass('ai-p');
		$cga.removeClass('comm-anim')
		$cec.removeClass('comm-anim')
		$cai.removeClass('comm-anim')
		$cjc.removeClass('comm-anim')
		$qsc.removeClass('quote-anim')
		$qga.removeClass('quote-anim')
		$qec.removeClass('quote-anim')
		$qai.removeClass('quote-anim')
		$qjc.removeClass('quote-anim')
		$dsc.removeClass('dps-anim')
		$dga.removeClass('dps-anim')
		$dec.removeClass('dps-anim')
		$dai.removeClass('dps-anim')
		$djc.removeClass('dps-anim')
		$ga.removeClass('opened')
		$sc.removeClass('opened')
		$ec.removeClass('opened')
		$ai.removeClass('opened')
		$jc.removeClass('opened')
		$('.second .write-up').html('"The United Nations Human Rights Council (UNHRC) is a United Nations System inter-governmental body whose 47 member states are responsible for promoting and protecting human rights around the world. The UNHRC is the successor to the UN Commission on Human Rights (UNCHR, herein CHR), and is a subsidiary body of the UN General Assembly. The council works closely with the Office of the High Commissioner for Human Rights (OHCHR) and engages the United Nations" special procedures.')
		$('.second .comm').html('United Nations Human Rights Council');
		$('.second .a1').html('Protection of Civilians in Armed Conflicts.');
		$('.second .a2').html('NA');
		$('.downn').attr("href", "Downloads/HRC BG.pdf");
	})

	$('#ec').click(function(){
		$('#sc, #hr, #ga, #ai, #jc').fadeIn(500)
		$csc.removeClass('comm-anim')
		$('.write-up').removeClass('ai-p');
		$chr.removeClass('comm-anim')
		$cga.removeClass('comm-anim')
		$cai.removeClass('comm-anim')
		$cjc.removeClass('comm-anim')
		$qsc.removeClass('quote-anim')
		$qhr.removeClass('quote-anim')
		$qga.removeClass('quote-anim')
		$qai.removeClass('quote-anim')
		$qjc.removeClass('quote-anim')
		$dsc.removeClass('dps-anim')
		$dhr.removeClass('dps-anim')
		$dga.removeClass('dps-anim')
		$dai.removeClass('dps-anim')
		$djc.removeClass('dps-anim')
		$ga.removeClass('opened')
		$hr.removeClass('opened')
		$sc.removeClass('opened')
		$ai.removeClass('opened')
		$jc.removeClass('opened')
		$('.second .write-up').html('The United Nations Economic and Social Council constitute one of the principal organs of the United Nations. It is responsible for coordinating the economic, social and related work of 14 United Nation-s specialized agencies, their functional commissions and five regional commissions. The ECOSOC has 54 members; it holds one four-week session each year in July. Since 1998, it has also held a meeting each April with finance ministers heading key committees of the World Bank and the International Monetary Fund (IMF).')
		$('.second .comm').html('The United Nations Economic and Social Council');
		$('.second .a1').html('The Question of Formulating New Economic Policies in the Context of Greek Economic Crisis.');
		$('.second .a2').html('Increasing Efficiency in Distribution of Official Development Assistance (ODA) given to Developing Nations.');
		$('.downn').attr("href", "Downloads/IUMUN_ECOSOC_BG.pdf");
	})

	$('#ai').click(function(){
		$('#sc, #hr, #ec, #ga, #jc').fadeIn(500)
		$csc.removeClass('comm-anim')
		$chr.removeClass('comm-anim')
		$cec.removeClass('comm-anim')
		$cga.removeClass('comm-anim')
		$cjc.removeClass('comm-anim')
		$qsc.removeClass('quote-anim')
		$qhr.removeClass('quote-anim')
		$qec.removeClass('quote-anim')
		$qga.removeClass('quote-anim')
		$qjc.removeClass('quote-anim')
		$dsc.removeClass('dps-anim')
		$dhr.removeClass('dps-anim')
		$dec.removeClass('dps-anim')
		$dga.removeClass('dps-anim')
		$djc.removeClass('dps-anim')
		$ga.removeClass('opened')
		$hr.removeClass('opened')
		$ec.removeClass('opened')
		$sc.removeClass('opened')
		$jc.removeClass('opened')
		$('.write-up').addClass('ai-p');
		$('.second .write-up').html('An All India Political Parties Meet is convened by the Honourable Speaker inviting all prominent political parties across various spectrums of Indian polity and special invitees that could well be organisations, councils or personalities to discuss a particular/many prevalent issues at hand.')
		$('.second .comm').html('All India Political Party Meet');
		$('.second .a1').html('Historic Continuous Crisis: Timeline 1980-1991');
		$('.second .a2').html('NA');
		$('.downn').attr("href", "Downloads/AIPPM_BACKGROUND_GUIDE.pdf");
	})

	$('#jc').click(function(){
		$('#sc, #hr, #ec, #ai, #ga').fadeIn(500)
		$('.write-up').removeClass('ai-p');
		$csc.removeClass('comm-anim')
		$chr.removeClass('comm-anim')
		$cec.removeClass('comm-anim')
		$cai.removeClass('comm-anim')
		$cga.removeClass('comm-anim')
		$qsc.removeClass('quote-anim')
		$qhr.removeClass('quote-anim')
		$qec.removeClass('quote-anim')
		$qai.removeClass('quote-anim')
		$qga.removeClass('quote-anim')
		$dsc.removeClass('dps-anim')
		$dhr.removeClass('dps-anim')
		$dec.removeClass('dps-anim')
		$dai.removeClass('dps-anim')
		$dga.removeClass('dps-anim')
		$ga.removeClass('opened')
		$hr.removeClass('opened')
		$ec.removeClass('opened')
		$ai.removeClass('opened')
		$sc.removeClass('opened')
		$('.second .write-up').html('JCC consists of two independently running subcommittees whose decisions and actions immediately affect the perpetual crisis at hand, thus providing for an experience like no other. What delegates will be asked to deal with is only partially revealed for your preparation; covert plots, terrible luck, and the well-meaning or hostile actions of the opposing committee together offer an unpredictable, volatile, and urgent, but undoubtedly exciting, experience. If the bloc as a whole is to succeed, the delegates must compromise, negotiate, and persevere in a battle of diplomatic wit; aker all, there is a nemesis waiting, biding its time.')
		$('.second .comm').html('Joint Crisis Committee');
		$('.second .a1').html(' Futuristic Committee; Iran Nuclear Deal');
		$('.second .a2').html('NA');
		$('.downn').attr("href", "Downloads/JCC_BGs.zip");
	})

})