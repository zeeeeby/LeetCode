void shiftArr(vector<int>& arr, int pos) {
    for(int i = arr.size() - 1; i > pos + 1; --i) {
        arr[i] = arr[i - 1];
    }
}
class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        for (size_t i = 0; i < arr.size() - 1; ++i) {
            if (arr[i] == 0) { 
                shiftArr(arr, i);
                arr[i + 1] = 0;
                i++;
            }
            
        }   
    }
};