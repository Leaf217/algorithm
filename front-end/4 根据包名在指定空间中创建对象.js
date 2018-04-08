function namespace(oNamespace, sPackage) {
    var package = sPackage.split('.');
    var pointer = oNamespace;
    for (var i = 0;i < package.length;i++) {
        if (package[i] in oNamespace) {
            if (typeof oNamespace[package[i]] !== "object") {
                oNamespace[package[i]] = {};
            }
        } else {
            oNamespace[package[i]] = {};
        }
        oNamespace = oNamespace[package[i]];
    }
    return pointer;
}