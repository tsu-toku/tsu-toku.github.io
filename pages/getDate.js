function getDate(){
    let clock = document.getElementById('clock');
    let today = new Date();

    clock.innerHTML = "令和" + (today.getFullYear() - 2018).toString().padStart(2, '0') + "年" + (today.getMonth() + 1).toString().padStart(2, '0') + "月" + today.getDate().toString().padStart(2, '0') + "日 " + today.getHours().toString().padStart(2, '0') + "時" + today.getMinutes().toString().padStart(2, '0') + "分";
}
setInterval(getDate,10000);