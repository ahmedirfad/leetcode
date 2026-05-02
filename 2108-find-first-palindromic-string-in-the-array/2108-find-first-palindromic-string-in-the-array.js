/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    function isPalindrome(str){
        let result ="";

        for(let i = str.length -1; i >=0; i--){
            result += str[i];
        }
        return result === str;
    }
    for(let i = 0; i < words.length; i++){
        if(isPalindrome(words[i])){
            return words[i];
        }
    }
    return "";
};