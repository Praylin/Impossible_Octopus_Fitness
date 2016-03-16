function loadStatus() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("morestatus").innerHTML = xhttp.response;
    }
  };
  xhttp.open("GET", "statuses-1.html", true);
  xhttp.send();
}
