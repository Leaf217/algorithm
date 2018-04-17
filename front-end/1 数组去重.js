Array.prototype.uniq = function () {
    //不支持ES6语法，调了半天！！！呜呜呜
    //let set = new Set(this);
    //return [...set];
    var newArr = [];
    var flag = true;
    for (var i = 0;i < this.length;i++) {
        if (newArr.indexOf(this[i]) == -1){
            if (this[i] != this[i] && typeof this[i] === 'number') {
                if (flag) {
                    newArr.push(this[i]);
                    flag = false;
                }
            } else {
                newArr.push(this[i]);
            }
        }
    }
    return newArr;
}