/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum1 = 0;
    let sum2 = 0;

    for(let num of nums){
        sum1+= num;
    
    
    let temp = num;
    while(temp > 0){
        sum2 += temp % 10;
        temp = Math.floor(temp/10);
    }
    }
    return sum1 - sum2;
};