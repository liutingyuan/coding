/**
 * 输入一个数组和一个目标值，找出数组中两项和为目标值的所有组合，输出索引。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if(typeof target !== 'number') {
        throw `variable "target" must be a number, but got a "${typeof target}".`
    }
    const match = [];
    if(Array.isArray(nums) && nums.length > 1) {
        nums.forEach((num, index) => {
            if(typeof num !== 'number') {
                return;
            }
            let firstIndex = index;
            while(firstIndex !== -1) {
                firstIndex = nums.indexOf(target - num, firstIndex + 1);
                (firstIndex !== -1) && match.push([index, firstIndex]);
            }
        })
    }else {
        throw `variable "nums" should be a array whose length > 1.`
    }
    return match;
};