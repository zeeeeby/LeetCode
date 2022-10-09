function numberOfSteps(num: number): number {
    return helper(num, 0)
};

const helper = (num: number, tryig: number) => {
    if (num == 0) return tryig
    if (num % 2 == 0) return helper(num / 2, tryig + 1);
    return helper(num - 1, tryig + 1)
}