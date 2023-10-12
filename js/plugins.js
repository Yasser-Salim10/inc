// /*global $, jQuery, alert*/

$(document).ready(function () {
  "use strict";
  //Nice Scroll
  $("html").niceScroll();
  
  $(".carousel").carousel({
    interval: 5000,
  });

  // Show Color Option Div When Click On The Gear

  $(".gear-check").click(function () {
    $(".color-option").fadeToggle();
  });

  var colorLi = $(".color-option ul li"),
    scrollButton = $("#scroll-top");
  // Change Theme Color On Click
  colorLi
    .eq(0)
    .css("backgroundColor", "#E60024")
    .end()
    .eq(1)
    .css("backgroundColor", "#E426D5")
    .end()
    .eq(2)
    .css("backgroundColor", "#009AFF")
    .end()
    .eq(3)
    .css("backgroundColor", "#FFD500");

  colorLi.click(function () {
    $('link[href*="theme"]').attr("href", $(this).attr("data-value"));
  });

  //Caching The Scroll Top Element

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
      scrollButton.show();
    } else {
      scrollButton.hide();
    }
  });
  scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 600);
  });

  //   Loading Screen
  $(window).load(function () {
    "use str"
    // Show The Scroll
    $("body").css("overflow", "auto");

    // Show The Scroll
    $("body").css("overflow", "auto");

    // Loading Elements
    $(".loading-overlay .loader").fadeOut(1000, function () {
      $(this)
        .parent()
        .fadeOut(2000, function () {
          $(this).remove();
        });
    });
  });
});

