typedef vector<vector<char>> Board;

bool isValidValue(Board& board, int row, int col, char value) {
    for (int i = 0; i < 9; ++i) {
        if (board[row][i] == value) return false;
        if (board[i][col] == value) return false;
    }

    for (int x = 0; x < 3; ++x) {
        for (int y = 0; y < 3; ++y) {
            if (board[row - row % 3 + x][col - col % 3 + y] == value) return false;
        }
    }
    return true;
}

bool solved(Board& board, int row, int col) {
    if (row == 9) {
        return true;
    }
    if (col == 9) return solved(board, row + 1, 0);
    if (board[row][col] != '.') return solved(board, row, col + 1);
    
    for (char i = '1'; i <= '9'; ++i) {
            if (!isValidValue(board, row, col, i)) continue;
            board[row][col] = i;
            if (solved(board, row, col + 1))
                   return true;
            board[row][col] = '.';
    }
    return false;
}

class Solution {
public:
    void solveSudoku(Board& board) {
        solved(board, 0, 0);
    }
};