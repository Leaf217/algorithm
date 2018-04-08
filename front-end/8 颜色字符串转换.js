function rgb2hex(sRGB) {
    //rgb转16进制，就相当于10进制数转换为16进制数
    //x.toString(16)，前提是x为number类型，所以要先使用parseInt将字符串类型的数字转换为数字类型，与此同时这个语句还能将数字中的空格删掉
    var reg=/rgb\((\d+),\s*(\d+),\s*(\d+)\)/;

    //之前写错了，原因在于逗号不需要使用转义字符
    //var reg = /^rgb\((\d+)\,(\s*)(\d+)\,(\s*)(\d+)\)$/；
    if (reg.test(sRGB)) {
        var allColor = sRGB.split('(')[1].split(')')[0];
        var sigleColor = allColor.split(',');//此时存在空格
        var output = '#';
        for (var i = 0;i < sigleColor.length;i++) {
            var num = parseInt(sigleColor[i]);
            if (num >= 0 && num <= 255) {
                var transfer = num.toString(16);
                output += ('0' + transfer).slice(-2);
            } else {
                return sRGB;
            }
        }
        return output;
    } else {
        return sRGB;
    }
}