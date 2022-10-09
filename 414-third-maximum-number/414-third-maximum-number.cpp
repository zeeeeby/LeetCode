#include <set>
#include  <iterator>
bool check(int n1, int n2, int n3, int compare) {
    return compare == n1 || compare == n2 || compare == n3;
}
class Solution {
public:
    int thirdMax(vector<int>& nums) {
        long long max1, max2, max3;
        const int M = -32768 * 32768 * 2;
        max1 = max2 = max3 = M;
        int c = 0;
        set<int> s;
        for (auto i: nums) s.insert(i);
        
        for (auto& i: s) {
            if (i > max1) {
                max3 = max2;
                max2 = max1;
                max1 = i;
            }
            else if (i > max2) {
                max3 = max2;
                max2 = i;
            }
            else if (i > max3) {
                max3 = i;
               
            }
        }
        auto res = s.size() >= 3 ? ++++s.rbegin() : s.rbegin();
        return *res;
    }
};