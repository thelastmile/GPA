// JavaScript Document

/***
Utility functions available across the site
***/
var CARDINAL = {
  size: function(){
    // return window size based on visibility as calculated by CSS
    var size = 'lg';

    // if we don't already have the size-detect div's, add them
    if ( $('.size-detect-xs').length == 0 ) {
      $('body')
        .append('<div class="size-detect-xs" />')
        .append('<div class="size-detect-sm" />')
        .append('<div class="size-detect-md" />')
        .append('<div class="size-detect-lg" />');
    }

    $(['xs', 'sm', 'md', 'lg']).each(function(i, sz) {
      if ($('.size-detect-'+sz).css('display') != 'none') {
        size = sz;
      }
    });
    return size;
  }
};

$(document).ready(function() {
  // note resize events and trigger resizeEnd event when resizing stops
  $(window).resize(function() {
    if(this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
      $(this).trigger('resizeEnd');
    }, 300);
  });

  $('#skip > a').click(function(e){
    var href = $(this).attr('href').substr(1); // remove the #
    var target = $('a[name="' + href + '"]');
    target.focus();
  });

  $('.navbar-collapse').collapse({toggle: false}); // activate collapsibility without toggling state
  // Call responsive funtion when browser window resizing is complete
  $(window).bind('resizeEnd', function() {
    var size = CARDINAL.size(); // what size is our window (xs, sm, md or lg)
    if (size == 'md' || size == 'lg') { // if size is md or lg, unhide search and gateway blocks
      $('.navbar-collapse').collapse('hide');
 //     $('.navbar-collapse').removeClass('in').addClass('collapse');
    }
	});

});