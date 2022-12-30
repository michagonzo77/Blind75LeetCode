// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

// Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let prodArr = [];
    for (let i = 0; i < nums.length; i++){
        let temp = null;
        for (let j = 0; j < nums.length; j++){
            if(nums[j] == nums[i]){
                continue;
            }
            if (temp == null){
                temp = nums[j]
            } else temp *= nums[j];
        } 
        prodArr.push(temp);
    }
    return prodArr;
};

var productExceptSelf2 = function(nums) {
    var length = nums.length
    var result = new Array(length);
    result.fill(1);

    var left_fac = 1, right_fac = 1, i = 0
    while(i < length) {
        result[i] *= left_fac
        left_fac *= nums[i]
        i++
        result[length - i] *= right_fac
        right_fac *= nums[length - i]
    }
    return result    
};

let nums = [1,2,3,4];

console.log(productExceptSelf2(nums));