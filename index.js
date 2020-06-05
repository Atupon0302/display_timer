
(function () {
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

        const timer_display_day = document.getElementById('timer_display_day');
        const timer_display_time = document.getElementById('timer_display_time');
        timer_display_day.textContent = str_day;
        timer_display_time.textContent = str_time;
    }, 0);
}(document));