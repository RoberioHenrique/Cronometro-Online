var hh = 0
var mm = 0
var ss = 0
var tempo = 1000 // Quantos milésimos valem 1s ?
var cron;
function inicio() {
    cron = setInterval(timer ,1000)
}
function pause() {
    clearInterval(cron)
}
function stop() {
    clearInterval(cron)
    hh = 0
    mm = 0 
    ss = 0
    document.querySelector("#tempo").innerHTML = '00:00:00'
    document.querySelector("#volta").innerHTML = ''
}
function volta() {
    let volta = []
    volta.push(hh, mm, ss)
    document.querySelector("#volta").innerHTML += `<p>${hh<10? '0'+hh:hh}:${mm<10?'0'+mm:mm}:${ss<10?'0'+ss:ss}</p>`
}
function timer() {
    ss++
    if (ss == 60) {
        ss = 0
        mm++
        if (mm==60) {
            mm = 0
            hh++
        }
    }
    var format = (hh<10?'0'+hh:hh) + ':' + (mm<10?'0'+mm:mm) + ':' + (ss<10?'0'+ss:ss)
    document.querySelector("#tempo").innerHTML = format
}
