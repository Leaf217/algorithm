function replaceSpace(str)
{
    let s_copy = str + ''; //复制字符串
    let s = s_copy.split('');
    for (let i = s.length - 1;i >= 0;i--) {
        if (s[i] === ' ') {
            s.splice(i, 1, '%20');
        }
    }
    return s.join('');
}