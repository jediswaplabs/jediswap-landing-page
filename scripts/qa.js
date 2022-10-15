var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length - 1; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    // this.classList.remove("border_bottom");

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.border = null;
      content.style.padding = "0px 60px";
    } else {
      content.style.padding = "0 60px 25px 60px";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

coll[coll.length - 1].addEventListener("click", function () {
  this.classList.toggle("active");
  // this.classList.remove("border_bottom");
  var content = this.nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
    content.style.padding = "0px 60px";
  } else {
    content.style.padding = "0 60px 25px 60px";
    content.style.maxHeight = content.scrollHeight + "px";
    // content.style.borderBottom = "1px solid #f2f2f2";
  }
});
