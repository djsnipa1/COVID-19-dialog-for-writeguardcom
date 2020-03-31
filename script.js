jQuery.widget('ui.dialog', jQuery.extend({}, jQuery.ui.dialog.prototype, {
    _title: function(titleBar) {
        titleBar.html(this.options.title || '&#160;');
    }
}));

$(function () {
  $("#dialog").dialog({
   autoOpen: true,
    show: {
      effect: "highlight",
      duration: 600
    },
    hide: {
      effect: "explode",
      duration: 1000
    },
    minWidth: 550,
    title: '<span class="fas fa-notes-medical"></span><span class="fas fa-viruses"></span> Example Dialog'
  });
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
    minWidth: 550,
    });

  $("#opener").on("click", function () {
    $("#dialog2").dialog("open");
  });
});

// var dialog = $("#dialog").dialog();

// dialog.data( "uiDialog" )._title = function(title) {
//     title.html( this.options.title );
// };

// dialog.dialog('option', 'title', '<span class="fas fa-biohazard"></span> Example Dialog');


// jQuery UI old icon
$('#btn1').button({icons: {primary: 'ui-icon-volume-on'}});
// Font Awesome Icon
$('#btn2').button({icons: {primary: 'icon-fas fa-biohazard'}});
// Font Awesome but BIGGER
$('#btn3').button({icons: {primary: 'icon-volume-up icon-large'}});
// Font Awesome extending
$('#btn4').button({icons: {primary: 'icon-fighter-jet icon-large'}});