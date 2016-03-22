//Reply button for each status
<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', replyFunction);
=======
//wrap this into a function like "replyfunction", reconnect it to any other file and call it in ajax.js
document.addEventListener('DOMContentLoaded', function () {
	var elements = document.getElementsByClassName('reply_button');
>>>>>>> 7df6732164a69bbb67a403cec1ff71c7b8fc21f5

function replyFunction (){
	var elements = document.getElementsByClassName('reply_button');
	console.log(elements);
	for (var i = 0; i < elements.length; i++){

		elements[i].addEventListener("click", function() {

			var test = document.getElementById(this.dataset.index);
			test.toggle();

		})

	}
<<<<<<< HEAD
}
=======
})
>>>>>>> 7df6732164a69bbb67a403cec1ff71c7b8fc21f5
