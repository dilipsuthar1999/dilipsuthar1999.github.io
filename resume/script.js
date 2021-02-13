$(function() {
	$('#nav-content li a').click(function(){
	   	$('li a').removeClass("active");
	    $(this).addClass("active");
	});
});

$("#nav-menu-open").click(function(){	 		
	$('#nav-content-menu-show').fadeToggle();
	$(this).find("i").toggleClass('fa-times');
});

$("#aboutpage-button").click(function(){	 		
	$('#about-fixed-container').fadeIn(1000);
});

$(".about-close").click(function(){
	$('#about-fixed-container').fadeOut(1000,function(){
		$('#about-fixed-container').css({"display":"none"});
	});

	$('#project1').fadeOut(1000,function(){
		$('#project1').css({"display":"none"});
	});

	$('#project2').fadeOut(1000,function(){
		$('#project2').css({"display":"none"});
	});

	$('#project3').fadeOut(1000,function(){
		$('#project3').css({"display":"none"});
	});

	$('#project4').fadeOut(1000,function(){
		$('#project4').css({"display":"none"});
	});

	$('#project5').fadeOut(1000,function(){
		$('#project5').css({"display":"none"});
	});

	$('#project6').fadeOut(1000,function(){
		$('#project6').css({"display":"none"});
	});
});

$("#project-show1").click(function(){	 		
	$('#project1').fadeIn(1000);
});

$("#project-show2").click(function(){	 		
	$('#project2').fadeIn(1000);
});

$("#project-show3").click(function(){	 		
	$('#project3').fadeIn(1000);
});

$("#project-show4").click(function(){	 		
	$('#project4').fadeIn(1000);
});

$("#project-show5").click(function(){	 		
	$('#project5').fadeIn(1000);
});

$("#project-show6").click(function(){	 		
	$('#project6').fadeIn(1000);
});
