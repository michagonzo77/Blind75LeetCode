/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
        max = Math.max(max, sum);
        sum = sum < 0 ? 0 : sum;
        console.log(`sum is ${sum}`)
        console.log(`max is ${max}`)
    }
    console.log(`final max is ${max}`)
    return max;
    
};

nums = [-2,1,-3,4,-1,2,1,-5,4]

maxSubArray(nums);