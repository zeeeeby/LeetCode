class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int ans = nums.size();
        size_t r = 0;
        for (size_t i = 0; i < nums.size(); ++i) {
            if (nums[i] != val) {
                nums[r++] = nums[i];
            }
            else {
                ans--;
            }
           
        }
        return ans;
    }
};