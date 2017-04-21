var sub = document.querySelector('.sub');
var img = document.querySelector('.image');
var space = document.querySelector('input[name=space');
var blur = document.querySelector('input[name=blur');
var color = document.querySelector('input[name=color');

var inputs = document.querySelectorAll('.control input');

const handleUpdate = function(){
	const suffix = this.dataset.sizing || '';
	console.log(suffix);
	console.log(this.value);
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));