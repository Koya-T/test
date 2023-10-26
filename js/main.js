$(document).ready(function () {
  $("#banner").fadeIn(300);
  $(window).on("scroll", function () {
    scrollHeight = $(document).height();
    scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
      $("#banner").css({
        position: "absolute",
        bottom: footHeight + 20,
      });
    } else {
      $("#banner").css({
        position: "fixed",
        bottom: "20px",
      });
    }
  });
});
