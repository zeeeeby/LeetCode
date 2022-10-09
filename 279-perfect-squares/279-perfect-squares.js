/**
 * @param {number} n
 * @return {number}
 */

var numSquares = function(n) {
    const visited = {}
    const bfs = () => {
        const q = [0]
        let depth = 0

        while (q.length) {
            let size = q.length
            depth++
            
            while (size > 0) {
                size--
                const u = q.shift() 
                for (let i = 0; i * i <= n; ++i) {
                    const new_sum = u + i * i
                    if (new_sum == n) return depth
                    if (new_sum > n) break;
                    if (!visited[new_sum]) {
                        visited[new_sum] = true
                        q.push(new_sum)
                    }
                }
            }
        }
    }
   
    
    return  bfs()
};