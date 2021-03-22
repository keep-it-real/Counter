let counterContainer = document.querySelector(".counterContainer");
let infoContainer = document.querySelector("#infoContainer");
let okBtn = document.querySelector(".okBtn");

let showOrHide = (element, state) => {
    element.style.display = state;
}

showOrHide(infoContainer, "none");
showOrHide(counterContainer, "none");

let start = (daysId, hoursId, minId, secId, dateId) => {
	showOrHide(counterContainer, "flex");
    let getRemain = (end) => {
        let t = Date.parse(end) - (new Date()).getTime();
        let seconds = Math.floor( (t/1000) % 60);
        let minutes = Math.floor( (t/1000/60) % 60);
        let hours = Math.floor( (t/(1000*60*60)) % 24);
        let days = Math.floor(t/(1000*60*60*24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    let day = document.getElementById(daysId);
    let hour = document.getElementById(hoursId);
    let minute = document.getElementById(minId);
    let second = document.getElementById(secId);
    let deadline = document.getElementById(dateId).value;
    let counter = setInterval(() => {
        let t = getRemain(deadline);
        day.innerHTML = t.days;
        hour.innerHTML = t.hours; 
        minute.innerHTML = t.minutes; 
        second.innerHTML = t.seconds;
        if(t.total <= 0) {
            clearInterval(counter);
            showOrHide(counterContainer, "none");
            showOrHide(infoContainer, "block");
        }
    }, 1000);
}

okBtn.addEventListener("click", () => showOrHide(infoContainer, "none"));

let languages = {
    "pl": {
		"label": "Wpisz datę i godzinę, by zacząć odliczanie. Prawidłowy format to: rok-miesiąc-dzień godz:min:sek",
        "daysLang": "dni",
        "hoursLang": "godz",
        "minLang": "min",
        "secLang": "sek",
        "message": "Odliczanie zakończone"
    },
    "en": {
		"label": "Enter a combination of date and time to start the countdown. The correct format is: year-month-day h:min:sec",
        "daysLang": "days",
        "hoursLang": "hours",
        "minLang": "min",
        "secLang": "sec",
        "message": "Countdown is finished"
    }
}

let langOpt = document.querySelector(".langOptions");
let langEl = document.querySelectorAll(".language");
let formLabel = document.querySelector(".label");
let daysLabel = document.querySelector(".daysLang");
let hoursLabel = document.querySelector(".hoursLang");
let minLabel = document.querySelector(".minLang");
let secLabel = document.querySelector(".secLang");
let messageInfo = document.querySelector(".message");

langEl.forEach(el => {
    el.addEventListener("click", () => {
        langOpt.querySelector(".active").classList.remove("active");
        el.classList.add("active");
        let attr = el.getAttribute("lang");
		formLabel.textContent = languages[attr].label;
        daysLabel.textContent = languages[attr].daysLang;
        hoursLabel.textContent = languages[attr].hoursLang;
        minLabel.textContent = languages[attr].minLang;
        secLabel.textContent = languages[attr].secLang;
		messageInfo.textContent = languages[attr].message;
    });
});






