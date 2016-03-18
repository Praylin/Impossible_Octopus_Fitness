function loadStatus() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("extra_statuses").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "statuses-1.html", true);
  xhttp.send();
}
