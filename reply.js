//Reply button for each status
//wrap this into a function like "replyfunction", reconnect it to any other file and call it in ajax.js
document.addEventListener('DOMContentLoaded', function () {
	var elements = document.getElementsByClassName('reply_button');

	for (var i = 0; i < elements.length; i++){

		elements[i].addEventListener("click", function() {

			var test = document.getElementById(this.dataset.index);
			test.toggle();

		})

	}
})
