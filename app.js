const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    if (secondsDegrees >= 444) {
        secondHand.style.transition = `none`
    } else {
        secondHand.style.transition = `all 0.05s`
    };

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    if (minutesDegrees >= 444) {
        minuteHand.style.transition = `none`
    } else {
        minuteHand.style.transition = `all 0.05s`
    };

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    if (hoursDegrees >= 420) {
        minuteHand.style.transition = `none`
    } else {
        minuteHand.style.transition = `all 0.05s`
    };

    console.log('Second: ' + seconds);
    console.log('Minute: ' + minutes);
    console.log('Hour: ' + (hours));
}


setInterval(setDate, 1000);