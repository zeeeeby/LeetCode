class Solution {
public:
    int superPow(int a, vector<int>& b) {
        int result = 1;
        for (int i = 0; i < b.size(); ++i) {
            int powered = binPow(a, b[i], 1337);
            for (int j = 0; j < b.size() - i - 1; ++j) {
                powered = binPow(powered, 10, 1337);
            }
            result = result * powered % 1337;
         
        }
        return result;
    }
    
    size_t binPow(size_t a, size_t n, int mod) {
        if (n == 0) {
            return 1;
        }
        if (n % 2 == 0) {
            size_t b = binPow(a, n / 2, mod);
            return b * b % mod;
        } 
        else {
            return a * binPow(a, n - 1, mod) % mod;
        }
    }
};