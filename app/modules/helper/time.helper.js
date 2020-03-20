export let getTimeStr = function (value) {
    let minus = "00";
    let sec = "00";

    //Lấy về phút, giây
    let minus_temp = Math.floor(value/60)
    let sec_temp = value%60;

    minus = (minus_temp >=10) ? minus_temp : `0${minus_temp}` ;
    sec = (sec_temp >=10) ? sec_temp : `0${sec_temp}` ;

    return `${minus}:${sec}`
}