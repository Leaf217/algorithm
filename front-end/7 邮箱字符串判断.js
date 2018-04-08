function isAvailableEmail(sEmail) {
    //没考虑到@之前有点存在的情况
    var reg = /^[A-Za-z0-9-_\.]+@[A-Za-z0-9-_]+(\.[A-Za-z0-9-_]+)+$/;
    if (reg.test(sEmail)) {
        return true;
    } else {
        return false;
    }
}