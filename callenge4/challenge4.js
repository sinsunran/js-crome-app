const clockTitle = document.querySelector(".js-clock");

function diffday(){
const today = new Date();
let targetYear = today.getFullYear();
if (today.getMonth()===11 && today.getDay()>24) {
    targetYear = today.getFullYear() + 1;
}
const dDay = new Date(`${targetYear}-12-24`);
const diff = dDay - today;

const diffDay = Math.floor(diff / (1000*60*60*24));
const diffHour = Math.floor((diff / (1000*60*60)) % 24);
const diffMin = Math.floor((diff / (1000*60)) % 60);
const diffSec = Math.floor(diff / 1000 % 60);

clockTitle.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

diffday();
setInterval(diffday, 1000);
