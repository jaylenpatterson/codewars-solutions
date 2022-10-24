function removeSmallest(numbers) {
    let smallestNumIndex = numbers.indexOf(Math.min(...numbers));
    
    return [...numbers.slice(0, smallestNumIndex), ...numbers.slice(smallestNumIndex + 1)];
  }