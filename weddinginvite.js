$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }

  $("#open").click(function () {
    // Run the animation
    $("#envelope").removeClass("close").addClass("open");

    // Wait 1.5 seconds and then redirect to fullinvite.html
    setTimeout(function () {
      window.location.href = "fullinvite.html";
    }, 2500);
  });

  $("#reset").click(function () {
    // Reset the envelope to closed state
    $("#envelope").removeClass("open").addClass("close");
  });
});
