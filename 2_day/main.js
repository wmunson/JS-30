function setTime(){
    const now = new Date();

    const sec = now.getSeconds();
    const secDeg = ((sec/60)*360)+90;
    secHand.style.transform = `rotate(${secDeg}deg)`;
    
    const min = now.getMinutes();
    const minDeg = ((min/60)*360)+90;
    minHand.style.transform = `rotate(${minDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour/60)*360)+90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    // console.log(sec);
    // console.log(min);
    // console.log(hour);
}

setInterval(setTime, 100);

const secHand = document.querySelector('#second');
const minHand = document.querySelector('#min');
const hourHand = document.querySelector('#hour');
