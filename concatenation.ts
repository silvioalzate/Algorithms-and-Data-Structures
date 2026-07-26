function getConcatenation(nums: number[]): number[] {
    
    const n = nums.length;
    const ans = new Array(2 * n);

    for(let i = 0; i < n; i++) {

        ans[i] = nums[i];
        ans[i + n] = nums[i];
    }
    return ans;
};

const nums = [1, 2, 1];
const res = getConcatenation(nums);

console.log(res);
