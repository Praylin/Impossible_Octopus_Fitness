//Toggle Function
function toggle(index) {
	console.log('toggle', this.dataset.index)
	var element = document.getElementById(this.dataset.index);
	if (element.style.display === 'block')
		element.style.display = 'none';
	else
		element.style.display = "block";
}
