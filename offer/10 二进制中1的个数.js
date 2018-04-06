function NumberOf1(n)
{
    let count = 0;
    while(n) {
        n = (n - 1) & n;
        count++;
    }
    return count;
}