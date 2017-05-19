$("li.dom-explosion-item").click(function() {
  if (hasClass(this, 'dei-1')) {
    $("#class_info").html("CSE 11");
  }
  else if (hasClass(this, 'dei-2')) {
    $("#class_info").html("CSE 12");
  }
  else if (hasClass(this, 'dei-3')) {
    $("#class_info").html("CSE 30");
  }
  else if (hasClass(this, 'dei-4')) {
    $("#class_info").html("CSE 100");
  }
  else if (hasClass(this, 'dei-5')) {
    $("#class_info").html("CSE 110");
  }
  else if (hasClass(this, 'dei-6')) {
    $("#class_info").html("CSE 120");
  }
  else if (hasClass(this, 'dei-7')) {
    $("#class_info").html("CSE 130");
  }
  else if (hasClass(this, 'dei-8')) {
    $("#class_info").html("CSE 140/141");
  }
  else if (hasClass(this, 'dei-9')) {
    $("#class_info").html("CSE 170");
  }
});

function hasClass(element, cls) {
  return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
