function ajax(url, onSuccess) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("string").innerHTML = xhttp.responseText;
    }
  };
  xhttp.open("GET", "url", true);
  xhttp.send();
}
