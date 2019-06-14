$("#nav_icon").click(function () {
    $(".nav-list").slideToggle(200);

})
// 顶部时间计算
// 时间显示
setInterval(autoPlay, 1000);

function autoPlay() {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    var da = date.getDate();
    var day = date.getDay();
    var h = date.getHours();
    var min = date.getMinutes();
    var s = date.getSeconds();
    var arr = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    // 2018—12-04 18:24:32
    document.getElementById("times").innerHTML = y + "-" + m + "-" + da + "" +
        "&nbsp;&nbsp;&nbsp;" + toTwo(h) + ":" + toTwo(min) + ":" + toTwo(s)
}

function toTwo(date) {
    return date < 10 ? "0" + date : date;
}
// 刷新
$(".set").click(function () {
    window.location.reload();

})