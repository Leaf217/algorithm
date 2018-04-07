function commonParentNode(oNode1, oNode2) {
    if (isChildNode(oNode1, oNode2)) {
        return oNode2;
    }
    if (isChildNode(oNode2, oNode1)) {
        return oNode1;
    }
    var sameParentNode = oNode1.parentNode;
    while (sameParentNode != document) {
        if (isChildNode(oNode2, sameParentNode)) {
            return sameParentNode;
        }
        sameParentNode = sameParentNode.parentNode;
    }
    return document;
}

function isChildNode (cNode, pNode) {
    var children = pNode.childNodes;
    for (var i = 0; i < children.length;i++) {
        if (cNode == children[i]) {
            return true;
        } else {
            if (children[i].childNodes.length > 0) {
                return isChildNode(cNode, children[i]);
            }
        }
    }
}