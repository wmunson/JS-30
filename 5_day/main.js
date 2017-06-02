const panel = document.querySelectorAll('.panel');

function toggleOpen(){
	console.log('click')
	this.classList.toggle('open')
}

function toggleClose(){
	console.log('click');
	// panel.forEach(panel => panel.classList.remove('open'));
	this.classList.toggle('open');
}

function toggleActive(e){
	console.log(e.propertyName)
	if(e.propertyName.includes('flex-grow')){
		this.classList.toggle('open-active')
	}
}


panel.forEach(panel => panel.addEventListener('click', toggleOpen))
panel.forEach(panel => panel.addEventListener('transitionend', toggleActive))