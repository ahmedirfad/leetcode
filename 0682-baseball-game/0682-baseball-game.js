/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let arr = [];
    let sum = 0;

    for (let op of operations){
        if(op==='C'){
            arr.pop();
        }
        else if(op==='D'){
            arr.push(arr[arr.length-1] * 2);
        }
        else if(op==='+'){
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
        else {
            arr.push(Number(op));
        }
    }

        for (let num of arr){
            sum += num;
        }
    return sum;
};