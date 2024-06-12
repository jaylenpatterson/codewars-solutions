function countSmileys(arr) {
    let validSmileysCount = 0;

    if (arr.length === 0) {
      return 0;
    }
  
    arr.forEach((currentSmiley) => {
        const SMILEY = currentSmiley;
        const SMILEY_EYES = SMILEY.charAt(0);
        const SMILEY_MOUTH = SMILEY.charAt(SMILEY.length - 1);
        const SMILEY_NOSE = SMILEY.replace(SMILEY_EYES, "").replace(SMILEY_MOUTH, "");
        const SMILEY_LENGTH = SMILEY.length;

        if (SMILEY_LENGTH === 2 && (SMILEY_EYES === ":" || SMILEY_EYES === ";") && (SMILEY_MOUTH === ")" || SMILEY_MOUTH === "D")) {
            return validSmileysCount++;
             
        }

        if ((SMILEY_EYES === ":" || SMILEY_EYES === ";") && (SMILEY_NOSE === "-" || SMILEY_NOSE === "~") && (SMILEY_MOUTH === ")" || SMILEY_MOUTH === "D")) {
            return validSmileysCount++;
        }

    });

    return validSmileysCount;
};