/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function(a) {
    const MAX = 10e5 + 1
    let ans = MAX
    const last = Array.from({length: 1000000 + 1},  () => 0)
    for (let i = 0; i < a.length; ++i) {
        if (last[a[i]]) {
            ans = Math.min(ans, i - last[a[i]] + 1)
        }
        last[a[i]] = i + 1
    }
    // ans + 1 потому что для каждого элемента его позиция хранится на 1 дальше: last[a[i]] = i + 1
    return ans == MAX ? -1 : ans + 1
};