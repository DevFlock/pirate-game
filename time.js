let time = document.getElementById("time")
let startTime = new Date().getTime()

function getTime(date) {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }


window.setInterval(() => {
    currTime = new Date()
    a = new Date().getTime()
    elapsed = a - startTime
    // time.innerHTML = getTime(currTime) + " - " + elapsed

    // Edit time innerHTML to display time as H:MM pm | elasped time
    // time.innerHTML = getTime(currTime) + " - " + elapsed

    time.innerHTML = getTime(currTime)
}, 1000)