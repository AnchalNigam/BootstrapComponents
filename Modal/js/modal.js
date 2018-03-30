$(document).ready(function(){
     $("#myModal").hide();  /*by default modal is hidden*/
     /*when clicked modal button,show the modal and also set the animation of modal*/
	 $("#myBtn").click(()=>{
         $("#myModal").show();
         $(".modal-content").animate({
	        top: '0px',
	        opacity:'1'
		 });
     });
	 /*when clicked upper close button,hide the modal and also set the animation of modal*/
	 $(".close").click(()=>{
         $("#myModal").hide();

         $(".modal-content").animate({
		        top: '-100px',
		        opacity:'0'
		    });
	 });
	  /*when clicked lower close button,hide the modal and also set the animation of modal*/
	 $(".close-btn").click(()=>{
         $("#myModal").hide();
          $(".modal-content").animate({
		        top: '-100px',
		        opacity:'0'
		    });
       
	 });
       
     



});