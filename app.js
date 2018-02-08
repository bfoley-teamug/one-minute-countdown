var initial = 6000;
var count = initial;
var counter;

function timer() {
    if (count <= 0) {
        clearInterval(counter);
      document.getElementById("timer").innerHTML = "Out of Time";
        return;
    }
    count--;
    displayCount(count);
}

function displayCount(count) {
    var res = count / 100;
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision
   document.getElementById("timer").innerHTML = res.toPrecision(count.toString().length) + "<br>seconds";
}

$('#start').on('click', function () {
    clearInterval(counter);
    counter = setInterval(timer, 10);
});

$('#stop').on('click', function () {
    clearInterval(counter);
});

$('#reset').on('click', function () {
    clearInterval(counter);
    count = initial;
    displayCount(count);
});

displayCount(initial);
