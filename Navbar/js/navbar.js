$(document).ready(function(){
	  
	  $(window).resize(function() {            /*when window resize then according to both nav and collapse nav will show and hide*/

		  if ($(this).width() < 770) {

		    $('.nav').hide();
		    $('.collapse-nav').show();

		  } else {

		    $('.nav').show();
		    $('.collapse-nav').hide();

	    }
       });

	  /*Clickabble hamburger*/
     $('.icon-adjust').click(()=>{
     	
         $('.nav').toggle();
     });
     /*end */

     /*dropdown clickable*/
      $('.dropdown').click(()=>{
     	
         $('.dropdown-content').slideToggle();
         $('.dropdown-content').css({
	    	"background-color":"white"});;
     });
    

     /*hover functionality*/

      $('.nav .item').hover(function(){
	    $(this).css({
	    	"background-color":"#CCCCCC"});
	    	
	   
	    }, function(){
	    $(this).css("background-color", "#7395AE");
	    
	});/*hover end*/

     /*for search bar,focus functionality*/
    $("input").focus(function(){
        
        $(this).addClass("colored-border");

    });//end focus

     $("input").focusout(function(){

        $(this).removeClass("colored-border");

    });//end focus

     /*When click on any link*/
    $('.clicked').click(function(){
    	  /*sweetalert*/
          swal({
                  title:`Congratulations!` ,                       //used template literal
                  text: `You have clicked!`,
                  type: `success`,
                  confirmButtonText: `Ok`
                  });
    });
});