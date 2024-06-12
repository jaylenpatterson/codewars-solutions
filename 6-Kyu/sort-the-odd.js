function sortArray(array) {
    const IS_ODD_NUMBER = (number) => (number % 2) !== 0;
    const ARRAY_ASCENDING = [...array].sort((a, b) =>{ return a - b });
    const ODD_ARRAY_ASCENDING = ARRAY_ASCENDING.filter((number) => IS_ODD_NUMBER(number));
    let oddArrayAscendingIndex = 0; // Index to traverse ODD_ARRAY_ASCENDING

    return array.map((number) => {
        // Reassign odd number to its sorted counterpart
        if (IS_ODD_NUMBER(number)) {
            number = ODD_ARRAY_ASCENDING[oddArrayAscendingIndex];
            oddArrayAscendingIndex++;
            return number;
        }

        return number;
    });
};
 