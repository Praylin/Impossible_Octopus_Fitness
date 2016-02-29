//window.addEventListener('load', displayForm)
document.addEventListener('DOMContentLoaded', displayForm);
function displayForm()
	{
		var theButton = document.getElementById('post_status_button');
		theButton.onclick = function() {
			document.getElementById('post_status').style.display = "block";
	}
}
//document.addEventListener('DOMContentLoaded', function(){

//1})