const Days=document.getElementById('days');
const Hours=document.getElementById('hours');
const Minutes=document.getElementById('minutes');
const Seconds=document.getElementById('seconds');
const TargetDate=new Date('January 1, 2026')
Timer();
function Timer(){
    const currentDate=new Date().getTime();
    const Distance = TargetDate - currentDate;
    let days=Math.floor(Distance/1000/60/60/24);
    let hours=Math.floor((Distance/1000/60/60)%24);
    let minutes=Math.floor((Distance/1000/60))%60;
    let seconds=Math.floor((Distance/1000)%60);
   days=String(days).padStart(2,'0');
   hours=String(hours).padStart(2,'0');
   minutes=String(minutes).padStart(2,'0');
   seconds=String(seconds).padStart(2,'0');
    Days.innerHTML=days;
    Hours.innerHTML=hours;
    Minutes.innerHTML=minutes;
    Seconds.innerHTML=seconds;
    if(Distance<0){
        clearInterval(interval);
        Days.innerHTML='00';
        Hours.innerHTML='00';
        Minutes.innerHTML='00';
        Seconds.innerHTML='00';
        const NewYear=document.querySelector('h1');
        NewYear.textContent="Happy New Year 2026😍😍💕";

    }
    setInterval(Timer,1000);
}