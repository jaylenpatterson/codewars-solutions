/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowelTest = (s) => {
        const REGEX = /^[aeiou]$/i;
        return REGEX.test(s);
    }

    const LETTER_ARRAY = s.split('');

    const VOWELS_ARRAY_REVERSED = LETTER_ARRAY.filter((letter) => {
        return vowelTest(letter);
    }).reverse();

    let vowelCount = 0;
    let reversedVowels = [];
    for (let i = 0; i < LETTER_ARRAY.length; i++) {
        if (vowelTest(LETTER_ARRAY[i])) {
            reversedVowels.push(VOWELS_ARRAY_REVERSED[vowelCount]);
            vowelCount++;
            continue;
        }
        reversedVowels.push(LETTER_ARRAY[i]);
    }

   return reversedVowels.join('');
};