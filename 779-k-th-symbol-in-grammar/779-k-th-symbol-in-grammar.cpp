int pow(int n, int x) {
    if (x == 0) return 1;
    int res = pow(n, x / 2);
    if (x % 2 == 0) 
        return res * res;
    return n * res * res;
}


int helper(int n, int k, int length) {
    if (n == 1 || k == 1) return 0;
   
    int prevLen = length / 2;
    if (k <= prevLen) return helper(n - 1, k, prevLen);
    return (1 + helper(n - 1, k - prevLen, prevLen)) % 2;
}
class Solution {
public:
    int kthGrammar(int n, int k) {
       return helper(n, k, pow(2, n - 1));
    }
};