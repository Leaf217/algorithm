function Fibonacci(n)
{
    if (n <= 1) {
        return n;
    } else {
        let sum = 0;
        let one = 1;
        let two = 0;
        for (let i = 2;i <= n;i++) {
            sum = one + two;
            two = one;
            one = sum;
        }
        return sum;
    }
}