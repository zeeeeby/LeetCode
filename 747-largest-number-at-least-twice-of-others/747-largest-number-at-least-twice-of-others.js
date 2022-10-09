var dominantIndex = function(a) {
    let max = a.reduce((a, b, i) => a[0] > b ? a : [b, i], [a[0], 0])
    
    for (let i in a) {
        if (a[i] * 2 > max[0] && i != max[1]) return -1
    }
    return max[1]
};