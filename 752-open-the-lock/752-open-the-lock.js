/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
String.prototype.replaceAt = function (index, replacement) {
    return this.slice(0, index) + replacement + this.slice(index + 1)
}

const modulo = (n, mod) => {
    if (n >= 0) return n % mod
    return n + mod
}
const z10 = (n) => modulo(n, 10)


var openLock = function(deadends, target) {
    let visited = {}
    let dst = {}

    const bfs = (state, deadends, target) => {
        const moves = [1, -1]
        const q = [state]
        visited[state] = true
        dst[state] = 0
        while (q.length) {
            const curr = q.shift()

            if (deadends.includes(curr)) continue
            if (curr === target) return

            for (let pos = 0; pos < curr.length; ++pos) {
                for (let j = 0; j < moves.length; ++j) {
                    const nextState = curr.replaceAt(pos, z10(parseInt(curr[pos]) + moves[j]))
                    if (!visited[nextState]) {
                        visited[nextState] = true
                        q.push(nextState)
                        dst[nextState] = (dst[curr] || 0) + 1

                    }
                }
            }
        }
    }
    bfs("0000", deadends, target)
    return dst[target] ?? -1
};