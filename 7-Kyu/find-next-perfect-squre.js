function findNextSquare(sq) {

    if (!Number.isInteger(Math.sqrt(sq))) {
      return -1;
    }
  
    return Math.pow(Math.sqrt(sq) + 1, 2);
}