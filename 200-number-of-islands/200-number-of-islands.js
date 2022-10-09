/**
 * @param {character[][]} grid
 * @return {number}
 */


const canVisit = ({x, y}, grid) => 
           x >= 0 && x < grid[0].length 
           && y >= 0 && y < grid.length 
           && grid[y][x] != "#" && grid[y][x] != "0"

const bfs = ({y, x}, grid) => {
    let q = [{x, y}]
    grid[y][x] = "#"
    
    
    let moves = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    while (q.length) {
        let curr = q.shift()
        for (let i = 0; i < moves.length; ++i) {
            const [dx, dy] = moves[i]
            const nextStep = {x: curr.x + dx, y: curr.y + dy}
            if (canVisit(nextStep, grid)) {
                q.push(nextStep)
                grid[nextStep.y][nextStep.x] = "#"
            }
        }
    }
}

const dfs = ({y, x}, grid) => {
    if (!canVisit({y, x}, grid)) return
    grid[y][x] = "#"
    dfs({x: x + 1, y}, grid)
    dfs({x: x - 1, y}, grid)
    dfs({x, y: y + 1}, grid)
    dfs({x, y: y - 1}, grid)
}

var numIslands = function(grid) {
    let ans = 0
    let n = grid.length
    let m = grid[0].length
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j] === "1") {
                dfs({x:j, y:i}, grid)
                ans++
            }
        }
    }    
    return ans
};