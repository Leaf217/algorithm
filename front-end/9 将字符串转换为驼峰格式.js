function cssStyle2DomStyle(sName) {
    var splitName = sName.split('-');
    var output = "";
    var m;
    if (splitName[0] == "") {
        m = 2;
        output += splitName[1];
    } else {
        m = 1;
        output += splitName[0];
    }
    for (var i = m;i <splitName.length;i++) {
        output += splitName[i].slice(0,1).toUpperCase() + splitName[i].slice(1);
    }
    return output;
}