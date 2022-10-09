class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        for (int i = 0; i < nums.size(); ++i) {
            int number = abs(nums[i]);
            nums[number - 1] = -abs(nums[number - 1]) ;
            
        }
        vector<int> res;
        res.reserve(nums.size());
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] > 0) res.push_back(i + 1);
        }
        return res;
    }
};