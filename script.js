function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function startClock() {
    updateClock(); // Update clock immediately
    const now = new Date();
    const msUntilNextSecond = 1000 - now.getMilliseconds();

    // Set a timeout to align the clock updates with the start of a new second
    setTimeout(function() {
        updateClock();
        setInterval(updateClock, 100); // Then continue to update every second
    }, msUntilNextSecond);
}

startClock(); // Call startClock instead of updateClock directly
