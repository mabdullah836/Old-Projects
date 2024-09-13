let mili = 0;
let sec = 0;
let min = 0;
let hr = 0;
let miliheading = document.getElementById("mili");
let secheading = document.getElementById("sec");
let minheading = document.getElementById("min");
let hrheading = document.getElementById("hr");
let btn =  document.getElementById("btn");

let interval;
function timer() {
     mili++
     miliheading.innerHTML = mili;
     if(mili >= 100){
          sec++
          secheading.innerHTML = sec;
          mili = 0;
     }else if(sec >= 60 ){
          min++
          minheading.innerHTML = min;
          sec = 0;
     }else if(min >= 60){
          hr++;
          hrheading.innerHTML = hr;
          min = 0;
     }
}

let arr =[];

function start() {
     interval = setInterval(timer,10);
     btn.setAttribute("disabled","")
     }
     
function stop() {
     clearInterval(interval);
     btn.removeAttribute("disabled")
     arr.push(min.innerText)
console.log(arr)

}

function reset() {
     mili = 0;
     sec = 0;
     min=0;
     hr=0;

     miliheading.innerHTML = "00";
     secheading.innerHTML = "00";
     minheading.innerHTML = "00";
     hrheading.innerHTML = "00";
      stop();
}