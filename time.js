function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var day = dateTime.getDay();
    const word = "welcome";

    console.log(dateTime);
    if (hrs > 12) {
        hrs = hrs - 12;
    }

    if (hrs == 10 && min==36) {
       // console.log("HELLO");
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('day').innerHTML = day;
    
}

setInterval(displayTime);
let counter = 0;

function hello() {

    counter++;
    
    console.log(counter);

}
//setInterval(hello,1000);

