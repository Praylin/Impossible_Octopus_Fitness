//Post a status
document.addEventListener('DOMContentLoaded', displayForm);
function displayForm()
{
	var theButton = document.getElementById('post_status_button');
	
	theButton.addEventListener("click", function() {
		var poststatus = document.getElementById('post_status');
		
		poststatus.toggle();
		})
}

