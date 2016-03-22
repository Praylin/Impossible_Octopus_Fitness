//Load more status response function
function onSuccess(xhttp) {
    document.getElementById("extra_statuses").innerHTML = xhttp.responseText;
    // document.getElementsByClassName('reply_button').addEventListener("click", replyFunction);
}
