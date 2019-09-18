//Timer 
let deadline = "2020-12-31";

function getTimeRemaining (endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor( (t/1000) % 60),
    minutes = Math.floor ( (t/1000/60) % 60 ),
    hours = Math.floor (t/(1000 * 60 * 60));

return {
    'total': t,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
    };

};

function setClock (id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

        function updateClock () {
            let t = getTimeRemaining (endtime);
            if (t.hours >= 0) {
                hours.innerHTML = t.hours;
            } else {
                hours.innerHTML = '00';
            }
            if (t.minutes >= 0) {
                minutes.innerHTML = t.minutes;
            } else {
                minutes.innerHTML = '00';
            }
            if (t.seconds >= 0) {
                seconds.innerHTML = t.seconds;
            } else {
                seconds.innerHTML = '00';
            };

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

    };
    updateClock();
    let timeInterval = setInterval(updateClock, 1000);
};
setClock('timer', deadline);
