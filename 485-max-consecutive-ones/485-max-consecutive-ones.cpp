#include <algorithm>
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int count = 0;
        int ans = 0;
        for (size_t i = 0; i < nums.size(); ++i) {
            count += nums[i];
            ans = std::max(ans, count);
            if (nums[i] == 0) {
                count = 0;
            }
        }
        return ans;
    }
};