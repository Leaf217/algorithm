function getUrlParam(sUrl, sKey) {
    var url = sUrl.split('?')[1].split('#')[0];
    var para = url.split('&');

    //判断是否有参数
    if (!url) {
        if (sKey) {
            return "";
        } else {
            return {};
        }
    }

    //判断是否指定参数
    if (sKey) {
        var arr = [];
        for (var i = 0; i < para.length; i++) {
            var key = para[i].split('=')[0];
            var val = para[i].split('=')[1];
            if (sKey == key) {
                arr.push(val);
            }
        }
        if (arr.length == 1) {
            return arr[0];
        } else if (arr.length == 0) {
            return "";
        } else {
            return arr;
        }
    } else {//不指定参数
        var obj = {};
        for (var j = 0; j < para.length; j++) {
            var key = para[j].split('=')[0];
            var val = para[j].split('=')[1];

            //判断对象中是否有此键
            if (!(key in obj)) {
                obj[key] = [];
            }
            obj[key].push(val);
        }
        return obj;
    }
}