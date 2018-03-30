$(document).ready(function(){

	  $('.accordian-card').hover(function(){
	    $(this).css("background-color", "#C2B9B0");
	   
	    }, function(){
	    $(this).css("background-color", "#AFD274");
	    
	});
      $('.accordian-card').click(function(){
           $(this).next().toggleClass('hidden');                 /*on clicking,toggleClass,it add 'hidden' class and remove it*/
      });



});/*end of document ready function*/