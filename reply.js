//Reply button for each status
document.addEventListener('DOMContentLoaded', replyFunction);

function replyFunction (){
	var elements = document.getElementsByClassName('reply_button');
	console.log(elements);
	for (var i = 0; i < elements.length; i++){

		elements[i].addEventListener("click", function() {

			var test = document.getElementById(this.dataset.index);
			test.toggle();

		})

	}
}