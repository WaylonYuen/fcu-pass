var color_list = ['rgba(248, 202, 18, 1)', 'rgba(0, 107, 86, 1)', 'rgba(0, 167, 222, 1)', 'rgba(0, 108, 146, 1)', 'rgba(122, 78, 155, 1)', 'rgba(213, 128, 178, 1)', 'rgba(226, 116, 16, 1)'];
var d = new Date();
var day = d.getDay();
var month = d.getMonth() + 1;
var date = d.getDate();

window.onload = function() {
    document.getElementById('dot').style.backgroundColor = color_list[day];
    document.getElementById('date').innerHTML = ('0' + month).slice(-2) + '/' + ('0' + date).slice(-2);
}