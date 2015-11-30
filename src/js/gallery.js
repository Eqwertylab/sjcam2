$(document).ready(function(){

  // Зум
  CloudZoom.quickStart({
    zoomPosition: 'inside',
    autoInside: true
  });

  // Переключатель картинка/видео

  var gallery_view = $('#gallery-view');
  var gallery_video = $('#gallery-video');

  $('.gallery__trumb').click(function(event) {
    /* Act on the event */
    if( $(this).hasClass('cloudzoom-gallery') ) {
      gallery_view
        .removeClass('gallery__view_video')
        .addClass('gallery__view_image');

      gallery_video
        .attr('src', '');
        
    } else {

      var video_url = $(this).data('videozoom');

      gallery_video.attr('src', video_url);

      gallery_view
        .removeClass('gallery__view_image')
        .addClass('gallery__view_video');
    }
  });
});