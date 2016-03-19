// function onSuccess(xhttp) {
// document.getElementById("extra_statuses").innerHTML = xhttp.responseText;
// }


function onSuccess(xhttp) {


var reqTimeout = setTimeout(function(){

document.getElementById("extra_statuses").innerHTML = xhttp.responseText;

}, 2000);
}

//function onSuccess(xhttp) {setTimeout(document.getElementById("extra_statuses").innerHTML = xhttp.responseText, 6000);
//}

//setTimeout(function onSuccess(xhttp) {document.getElementById("extra_statuses").innerHTML = xhttp.responseText, 6000)
