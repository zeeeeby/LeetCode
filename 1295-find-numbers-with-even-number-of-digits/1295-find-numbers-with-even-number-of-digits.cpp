#include <algorithm>
int countDigits(int n) {
        int res = 0;
        while(n > 0) {
            ++res;
            n /= 10;
        }
        return res;
}
class Solution {
public:
   
    int findNumbers(vector<int>& nums) {
        return std::count_if(nums.begin(), nums.end(), [](int i){return countDigits(i) % 2 == 0;});
    }
};