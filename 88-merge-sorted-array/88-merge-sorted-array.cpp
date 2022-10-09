class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int> fst = vector(nums1.begin(), nums1.begin() + m);
        int left = 0, right = 0, res = 0;
        while (left < m && right < n) {
            if (fst[left] < nums2[right]) {
                nums1[res] = fst[left++];
            }
            else {
                nums1[res] = nums2[right++];
            }
            res++;
        }
        while (left < m) {
            nums1[res++] = fst[left++];
        }
        while(right < n) {
            nums1[res++] = nums2[right++]; 
        }
    }
};