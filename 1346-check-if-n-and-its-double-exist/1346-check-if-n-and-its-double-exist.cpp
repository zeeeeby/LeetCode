#include <unordered_map>

class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        std::unordered_map<double, int> m;
        for (auto& i: arr) {
            if (m.find((double)i / 2) != m.end() || m.find(i * 2) != m.end()) {
                return true;
            }
            m.insert({i, i});
        }
        return false;
    }
};