var antares = require('antares-http');
 
function ranNum(min,max) {
    return Math.floor(Math.random() * (max-min) + min);
}

setInterval(() => {
var myData = {
  temperature: ranNum(25,30),
  humidity: ranNum(80,90)
}
 
antares.setAccessKey('c8bcdd08f0d83396:9319ed5ed1ba50e8');
 
antares.send(myData, 'TempSens', 'TemperatureSensor')
    .then((response) => {
    console.log(response);
    })
}, 3005);