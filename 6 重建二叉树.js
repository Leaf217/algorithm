function reConstructBinaryTree(pre, vin) {
    let node = null;
    if (pre.length) {
        let root = pre[0];
        let rootIndex = vin.indexOf(root);
        let vinLeft = vin.slice(0, rootIndex);
        let vinRight = vin.slice(rootIndex + 1);

        let preLeft = pre.slice(1, rootIndex+1);
        let preRight = pre.slice(rootIndex+1);

        node = {
            val: pre[0],
            left: reConstructBinaryTree(preLeft, vinLeft),
            right: reConstructBinaryTree(preRight, vinRight)
        }
    }
    return node;
}