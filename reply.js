//Reply button for each status
document.addEventListener('DOMContentLoaded', function () {
	var elements = document.getElementsByClassName('reply_button');

	for (var i = 0; i < elements.length; i++){

		elements[i].addEventListener("click", function() {

			var test = document.getElementById(this.dataset.index);
			test.toggle();

		})

	}
})