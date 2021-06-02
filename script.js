function startTimer(duration, display,dt) {
    var timer = duration, minutes, seconds;
    dt= new Date();
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var duration = 60 * 24; // Converter para segundos
        display =  document.querySelector('#timer'); // selecionando o timer
        document.getElementById('#tst').innerHTML= data.getFullYear() ;
    startTimer(duration, display); // iniciando o timer
};

