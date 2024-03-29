// Create a new list item when clicking on the "Add" button
var ul = document.getElementById("myUL");
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
  ul.appendChild(li);
  localStorage["list"] = ul.innerHTML
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  }
  document.getElementById("myInput").value = "";

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
if (localStorage["list"]) {
  ul.innerHTML = localStorage["list"];
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    localStorage.removeItem ("list");
    var div = this.parentElement;
    div.style.display = "none";
    count --;
    number.innerHTML = " " + count;
  }

}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
var number = document.getElementById("number");

count = 0

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
   if (ev.target.classList.toggle('checked')){
    ev.target.tagName == 'number'
    count ++;
    number.innerHTML = " " + count;
  } else {
    count --;
    number.innerHTML = " " + count;
    
  }

}
}, false);
