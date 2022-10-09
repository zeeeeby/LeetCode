unordered_map<int, int> cache;

class Solution {
public:
    int fib(int n) {
        auto needle = cache.find(n);
        if (needle != cache.end()) {
            return needle->second;
        }
        int res;
        if (n < 2) res = n;
        else res = fib(n - 1) + fib(n - 2);
        cache.insert({ n, res });
        
        return res;
    }
};