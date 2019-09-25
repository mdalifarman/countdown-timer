'use strict'

function $(selector){
    return document.querySelector(selector);
}

let endDate = new Date('2020/9/30 12:00:00').getTime();

let countTime = setInterval(function() {
    let today = new Date().getTime();
    let timer = endDate - today;

    if (timer >= 0) {
        let days = Math.floor(timer / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timer % (1000 * 60)) / 1000);
        $('#count_days').innerHTML = `${days} <span>${days > 1 ? "days" : "day"}</span>`;
        $('#count_hours').innerHTML = `${hours} <span>${hours > 1 ? "hours" : "hour"}</span>`;
        $('#count_mins').innerHTML = `${minutes} <span>${minutes > 1 ? "minutes" : "minute"}</span>`;
        $('#count_secs').innerHTML = `${seconds} <span>${seconds > 1 ? "seconds" : "second"}</span>`;

    } else {
        $('#countdown-wrap').innerHTML = 'Sorry Offer is Closed Now';
    }


}, 1000);
