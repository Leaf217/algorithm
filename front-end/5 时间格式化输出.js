//没有AC，感觉是牛客网系统的事情，大家都表示AC不了
function formatDate(oDate, sFormation) {
    var space = sFormation.split(' ');//0：年月日 1：时分秒 2：星期几
    var yMonDay = space[0].split('-');//0：年 1：月 2：日
    var hMinSec = space[1].split(':');//0：时 1：分 2：秒

    var year = oDate.getFullYear();//举例：2014
    var month = oDate.getMonth() + 1;//返回0-11，举例：9
    var date = oDate.getDate();//返回1-31，举例：5
    var hours = oDate.getHours();//返回0-23，举例：13
    var minutes = oDate.getMinutes();//返回0-59，举例：14
    var seconds = oDate.getSeconds();//返回0-59，举例：20
    var day = oDate.getDay();//返回0-6，分别代表周日-周六
    var mapping = {
        yyyy: year,
        yy: year % 100,
        MM: ('0' + month).slice(-2),
        M: month,
        dd: ('0' + date).slice(-2),
        d: date,
        HH: ('0' + hours).slice(-2),
        H: hours,
        hh: ('0' + hours % 12).slice(-2),
        h: hours % 12,
        mm: ('0' + minutes).slice(-2),
        m: minutes,
        ss: ('0' + seconds).slice(-2),
        s: seconds,
        w:['日', '一', '二', '三', '四', '五', '六'][day]
    };

    var output = mapping[yMonDay[0]] + '-' + mapping[yMonDay[1]] + '-' + mapping[yMonDay[2]]
    + ' ' + mapping[hMinSec[0]] + ':' + mapping[hMinSec[1]] + ':' + mapping[hMinSec[2]]
    + ' ' + '星期' + mapping.w;

    return output;
    // for(var key in mapping){
    //    sFormation = sFormation.replace(key, mapping[key]);
    // }
    // return sFormation;
}



