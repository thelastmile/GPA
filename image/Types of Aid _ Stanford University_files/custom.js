/*******************************************************************
Resets iframe page back to top when loading
********************************************************************/
	function scrollWindow()
  	{
  		window.scrollTo(0,0)
  	}
/*******************************************************************
SU code shows gateway links when menu is collapsed
********************************************************************/
$(document).ready(function() {
	$('#gateway-nav > h4').click(function(el) {
		$('#gateways').slideToggle();
		$(this).children("span").first().toggleClass("fa-chevron-circle-down fa-chevron-circle-right");
  });
});
/*******************************************************************
FAQ show and hide
********************************************************************/
if(!document.location.hash){
$(document).ready(function() {
  $('#faqs h3').each(function() {
    var tis = $(this), state = false, answer = tis.next('div').slideUp();
    tis.click(function() {
      state = !state;
      answer.slideToggle(state);
      tis.toggleClass('active',state);
    });
  });
  $('#faqs ol li').each(function() {
    var tis2 = $(this), state2 = false, answer2 = tis2.next('div').slideUp();
    tis2.click(function() {
      state2 = !state2;
      answer2.slideToggle(state2);
      tis2.toggleClass('active',state2);
    });
  });
});
};
function showAll() {
  $('#faqs h3').each(function() {
    var tis = $(this), state = true, answer = tis.next('div').slideDown();
  });
  $('#faqs ol li').each(function() {
    var tis2 = $(this), state2 = true, answer2 = tis2.next('div').slideDown();
  });
};
/*******************************************************************
Tree Menu http://www.bootply.com/7MtWXj6CIB
********************************************************************/
$(document).ready(function() {
        
        $(".alert").addClass("in").fadeOut(4500);

/* swap open/close side menu icons */
$('[data-toggle=collapse]').click(function(){
  	// toggle icon
  	$(this).find("i").toggleClass("fa-caret-right fa-caret-down");
});
        
        });
/*******************************************************************
Bootstrap Youtube Popup Player Plugin
https://github.com/abhinayrathore/Bootstrap-Youtube-Popup-Player-Plugin
********************************************************************/
$(function () {
	$(".youtube").YouTubeModal({autoplay:0, width:470, height:264});
});
