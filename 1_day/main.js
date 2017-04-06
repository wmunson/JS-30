
function removeTransition(event){
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const key = document.querySelectorAll('.keys');
key.forEach(keys=> keys.addEventListener('transitionend', removeTransition));

function playSound(event){
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.keys[data-key="${event.keyCode}"]`);
    // console.log(audio)
    console.log(key);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}

window.addEventListener('keydown', playSound);