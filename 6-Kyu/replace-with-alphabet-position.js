function alphabetPosition(text) {
    const alphabet = ["a", "b", "c", "d" ,"e", "f", "g", "h" ,"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y","z"];
    const alphabetArr = text.toLowerCase().split("");
    let answer = "";
    
    for (let i = 0; i < alphabetArr.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[j] === alphabetArr[i]) {
          answer += ((j+1) + " ");
        }
      }
    }
    
    return answer.trim();
    
  }