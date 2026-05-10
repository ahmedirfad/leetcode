/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let single = 0;
    let double = 0;

    for(let num of nums){
        if(num>=0 && num<=9){
            single += num;
        }
        if(num>=10 && num<=99){
            double += num;
        }
    }

    let total = single + double;

    return single > total - single || double > total - double;
};