class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int d = 1;
        int ans = nums.size();
        for (size_t i = 1; i < nums.size(); ++i) {
            if (nums[i] != nums[i - 1]) {
                nums[d++] = nums[i];
            }
            else {
                ans--;
            }
        }
        return ans;
    }
};