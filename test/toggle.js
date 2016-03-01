//window.addEventListener('load', displayForm)
document.addEventListener('DOMContentLoaded', displayForm);
function displayForm()
	{
		var theButton = document.getElementById('post_status_button');
		theButton.onclick = function() {
			var theForm = document.getElementById('post_status');
			var displayStyle = theForm.style.display;
			if (displayStyle == "block")
			{
				theForm.style.display = "none";
			}
			else 
			{
				theForm.style.display = "block";
			}
	}
}
//document.addEventListener('DOMContentLoaded', function(){

//1})