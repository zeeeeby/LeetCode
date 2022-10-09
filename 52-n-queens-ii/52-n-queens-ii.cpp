vector<int> cols;
vector<int> diag1;
vector<int> diag2;
int ans = 0;
bool isValidCell(int row, int col) {
    return !(cols[col] || diag1[row + col] || diag2[row - col + cols.size() - 1]);
}
void place(int row, int col) {
    cols[col] = diag1[row + col] = diag2[row - col + cols.size() - 1] = 1;
}

void unplace(int row, int col) {
      cols[col] = diag1[row + col] = diag2[row - col + cols.size() - 1] = 0;
}
void helper(int row) {
    if (row == cols.size()) {
        ans++;
        return;
    }
    
    for (int col = 0; col < cols.size(); ++col) {
        if (!isValidCell(row, col)) continue;
        place(row, col);
        helper(row + 1);
        unplace(row, col);
    }
}
class Solution {
public:
    int totalNQueens(int n) {
        ans = 0;
        cols.resize(n, 0);
        diag1.resize(n * 2 - 1, 0);
        diag2.resize(n * 2 - 1, 0);
        
        helper(0);
        return ans;
    }
};