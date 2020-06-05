window.onload = function() {
    this.clock();
}
var clock = function () {
    const timer_display = document.getElementById('timer_display');
    if(document.getElementById("timer_display_day") != null){
        timer_display.textContent = null;
    }
    
    const timer_display_day = document.createElement("div");
    timer_display_day.setAttribute("id", "timer_display_day");
    timer_display.appendChild(timer_display_day);
    const timer_display_time = document.createElement("div");
    timer_display_time.setAttribute("id", "timer_display_time");
    timer_display.appendChild(timer_display_time);

    setInterval(function () {
        var date = new Date(),
            str_day =
                date.getFullYear() + '/' +
                ('0' + (date.getMonth() + 1)).slice(-2) + '/' +
                ('0' + date.getDate()).slice(-2);
            str_time =
                ('0' + date.getHours()).slice(-2) + ':' +
                ('0' + date.getMinutes()).slice(-2) + ':' +
                ('0' + date.getSeconds()).slice(-2) + '.' +
                ('00' + date.getMilliseconds()).slice(-3);
        

        timer_display_day.textContent = str_day;
        timer_display_time.textContent = str_time;
    }, 0);
}

var stopwatch = function(){
    console.log("stopwatch()");
    const timer_display = document.getElementById('timer_display');
    if(document.getElementById("timer_display_day") != null){
        timer_display.textContent = null;
    }
    const timer_clock_display = document.createElement("div");
    timer_clock_display.innerText = "00:00:000";
    timer_clock_display.setAttribute("id", "timer_clock_display");
    timer_display.appendChild(timer_clock_display);
    
    const start_button = document.createElement("button");
    start_button.innerText = "Start";
    start_button.setAttribute("id", "start");
    start_button.setAttribute("class", "ui button");
    timer_display.appendChild(start_button);
    const stop_button = document.createElement("button");
    stop_button.innerText = "Stop";
    stop_button.setAttribute("id", "stop");
    stop_button.setAttribute("class", "ui button");
    timer_display.appendChild(stop_button);
    const reload_button = document.createElement("button");
    reload_button.innerText = "Reload";
    reload_button.setAttribute("id", "reload");
    reload_button.setAttribute("class", "ui button");
    timer_display.appendChild(reload_button);



    let start_time;
    let elapsed_time = 0;
    let timer_id;
    let time_to_add = 0;
    function updateTimeText(){
        let m = Math.floor(elapsed_time / 60000);
        let s = Math.floor(elapsed_time % 60000 / 1000);
        let ms = elapsed_time % 1000;
        m = ('0' + m).slice(-2); 
        s = ('0' + s).slice(-2);
        ms = ('0' + ms).slice(-3);
        timer_clock_display.textContent = m + ':' + s + ':' + ms;
    }
    function countUp(){
        timer_id = setTimeout(function(){
            elapsed_time = Date.now() - start_time + time_to_add;
            updateTimeText()
            countUp();
        },10);
    }
    start_button.addEventListener('click', function(){
        start_time = Date.now();
        countUp();
    });
    stop_button.addEventListener('click', function(){
        clearTimeout(timer_id);
        time_to_add += Date.now() - start_time;
    });
    reload_button.addEventListener('click', function(){
        elapsed_time = 0;
        time_to_add = 0;
        updateTimeText();
    });

}