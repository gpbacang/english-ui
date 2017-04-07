$(document).ready(function() {
  // showTitle();
  // unitList();
  setTimeout(function() {
    unitList();
  }, 5000);
});

function showTitle() {
  var appTitle = $('#title-page').addClass('show');
  appTitle.find('img').addClass('show');
}

function unitList() {
  var units = $('#unit-list > div:last-child > div');
  var index = 0;

  var delay = setInterval(function() {
    if (index <= units.length) {
      $(units[index]).addClass('show');
      index += 1;
    } else {
      clearInterval(delay);
    }
  }, 100);
}
