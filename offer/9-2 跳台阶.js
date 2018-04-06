function jumpFloor(number)
{
    if (number <= 2) {
        return number;
    } else {
        let sum = 0;
        let one = 2;
        let two = 1;
        for (let i = 3;i <= number;i++) {
            sum = one + two;
            two = one;
            one = sum;
        }
        return sum;
    }
}