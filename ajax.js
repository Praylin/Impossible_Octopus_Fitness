//Function to factorise AJAX request and response
function ajaxGet(url, onSuccess) {
  	var buttonId = document.getElementById("extra_status_btn");
  	buttonId.disabled = "true";
  	buttonId.style.cursor = "text";
  	buttonId.style.background = "#FF0000";
  	var xhttp=new XMLHttpRequest ();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
      		onSuccess(xhttp);
<<<<<<< HEAD
          replyFunction();
=======
		//call function in reply.js here      	
    	}
>>>>>>> 7df6732164a69bbb67a403cec1ff71c7b8fc21f5
  	};
  }
 	xhttp.open("GET", url, true);
  	setTimeout(function(){
  		xhttp.send();
  		buttonId.disabled = false;
  		buttonId.style.cursor = "default";
  	}, 2000);
}




