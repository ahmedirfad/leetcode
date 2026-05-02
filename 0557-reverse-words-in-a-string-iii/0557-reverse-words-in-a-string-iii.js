/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(" ");
    let result = [];

    for(let i =0; i < words.length; i++){
        let word = words[i];
        let reversed = "";

        for(let j = word.length - 1; j>=0; j--){
            reversed+=word[j];
        }
        result.push(reversed);
    }
    return result.join(" ");
};