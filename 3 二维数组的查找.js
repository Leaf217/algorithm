function Find(target, array) {
    let col = array[0].length;
    let row = array.length;
    for (let r = 0;r < row;r++) {
        for (let c = col-1;c >=0;c--) {
            if(array[r][c] === target) {
                return true;
            }
            if (array[r][c] > target) {
                continue;
            } else {
                break;
            }
        }
    }
    return false;
}