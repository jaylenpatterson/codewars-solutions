// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string. 
// Return the merged string.

var mergeAlternately = function(word1, word2) {
    const SHORTER_WORD = word1.length < word2.length ? word1 : word2;
    let string = "";
    for (let i = 0; i < SHORTER_WORD.length; i++) {
        string += word1[i] + word2[i];
    }

    if (word1.length > word2.length) {
        return string += word1.substring(word2.length);
    }
    if (word2.length > word1.length) {
        return string += word2.substring(word1.length);
    }

    return string;
};