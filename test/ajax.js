
function ajaxGet(url, onSuccess) {
	var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      onSuccess(xhttp);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function onSuccess(xhttp) {
  document.getElementById("extra_statuses").innerHTML = xhttp.responseText;
}