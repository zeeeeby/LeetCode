function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0] - b[0])
    const answer: number[][] = [intervals[0]]
    
    for (let i = 1; i < intervals.length; ++i) {
        const last = answer[answer.length - 1];
        if (intervals[i][0] > last[1]) {
            answer.push(intervals[i])
        }
        else {
            answer[answer.length - 1] = [last[0], Math.max(last[1], intervals[i][1])]
        }
    }
    return answer
};