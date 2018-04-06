function minNumberInRotateArray(rotateArray)
{
    let len = rotateArray.length;
    if (len <= 0) {
        return;
    }
    let index1 = 0;
    let index2 = len-1;
    let midIndex = index1;
    while (rotateArray[index1] >= rotateArray[index2]) {
        if (index2 - index1 === 1) {
            midIndex = index2;
            break;
        }
        midIndex = Math.floor((index1 + index2)/2);

        if (rotateArray[index1] === rotateArray[index2] && rotateArray[index1] === rotateArray[midIndex]) {
            return inOrder(rotateArray, index1, index2);
        }

        if (rotateArray[index1] <= rotateArray[midIndex]) {
            index1 = midIndex;
        } else {
            index2 = midIndex;
        }

    }
    return rotateArray[midIndex];
}

function inOrder(rotateArray, index1, index2) {
    let result = rotateArray[index1];
    for (let i = index + 1; i <= index2;i++) {
        if (rotateArray[i] < result) {
            result = rotateArray[i];
        }
    }
    return result;
}