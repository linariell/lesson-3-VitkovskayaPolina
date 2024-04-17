/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

function isPalindrome(str) {
    return str.split('').reverse().join('') == str;
}

















































module.exports = isPalindrome