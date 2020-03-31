$(function () {
  $("#dialog").dialog();
});

$(function () {
  $("#dialog2").dialog({
    autoOpen: false,
    show: {
      effect: "highlight",
      duration: 600
    },
    hide: {
      effect: "explode",
      duration: 1000
    },
    minWidth: 400
  });

  $("#opener").on("click", function () {
    $("#dialog2").dialog("open");
  });
});
