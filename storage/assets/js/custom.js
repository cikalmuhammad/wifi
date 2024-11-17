(function ($) {
  $(".th-slider").each(function () {
    var thSlider = $(this);
    var settings = $(this).data("slider-options");

    // Store references to the navigation Slider
    var prevArrow = thSlider.find(".slider-prev");
    var nextArrow = thSlider.find(".slider-next");
    var paginationEl = thSlider.find(".slider-pagination");

    var autoplayconditon = settings["autoplay"];

    var sliderDefault = {
      slidesPerView: 1,
      spaceBetween: settings["spaceBetween"] ? settings["spaceBetween"] : 24,
      loop: settings["loop"] == false ? false : true,
      speed: settings["speed"] ? settings["speed"] : 1000,
      autoplay: autoplayconditon
        ? autoplayconditon
        : { delay: 6000, disableOnInteraction: false },
      navigation: {
        nextEl: nextArrow.get(0),
        prevEl: prevArrow.get(0),
      },
      pagination: {
        el: paginationEl.get(0),
        clickable: true,
        renderBullet: function (index, className) {
          return (
            '<span class="' +
            className +
            '" aria-label="Go to Slide ' +
            (index + 1) +
            '"></span>'
          );
        },
      },
    };

    var options = JSON.parse(thSlider.attr("data-slider-options"));
    options = $.extend({}, sliderDefault, options);
    var swiper = new Swiper(thSlider.get(0), options); // Assign the swiper variable

    if ($(".slider-area").length > 0) {
      $(".slider-area").closest(".container").parent().addClass("arrow-wrap");
    }
  });
})(jQuery);
