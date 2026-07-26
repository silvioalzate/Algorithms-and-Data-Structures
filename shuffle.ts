function shuffle(nums: number[], n: number): number[] {

    const ans = [];

    for (let i = 0; i < n; i++) {

        ans[2 * i] = nums[i];
        ans[2 * i + 1] = nums[i + n];
    }

    return ans;

};

const nums = [1, 2, 3, 4, 7, 8, 9, 0];
const n = 4;
const res =shuffle(nums, n);

console.log(res);
