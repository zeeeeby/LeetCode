#include <algorithm>
class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        size_t i = 0;
        for (; i < arr.size() - 1; ++i) {
            arr[i] = std::accumulate(arr.begin() + i + 1, arr.end(), arr[i + 1],
                                     [](int a, int b) { return a > b ? a : b; });
            
        }
        arr[i] = -1;
        
        return arr;
    }
};