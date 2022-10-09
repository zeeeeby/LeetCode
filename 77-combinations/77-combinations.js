/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

const combine = (n, k) => {
    const visited = Array.from({length: n}).map(Boolean) 
    const ans = []
    const temp = []
    const _combinations = (start) => {
        if (temp.length == k) {
            ans.push(temp.slice())
            return
        }
        
        for (let i = start; i < visited.length; ++i) {
            if (!visited[i]) {
                visited[i] = true
                temp.push(i + 1)
                _combinations(i + 1)
                visited[i] = false
                temp.pop()
            }
        }
    }
    _combinations(0)
    return ans
}