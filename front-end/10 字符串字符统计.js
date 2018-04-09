//未通过，系统问题
function count(str) {
    var obj = {};
    for (var i = 0;i < str.length;i++) {
        if (str[i] != " ") {
            if (str[i] in obj) {
                obj[str[i]]++;
            }else {
                obj[str[i]] = 1;
            }
        }
    }
    return obj;
}