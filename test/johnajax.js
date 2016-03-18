function johnajax(url, onSuccess) {
  var xhttp;
  xhttp=new XMLHttpRequest ();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      onSuccess(xhttp);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

