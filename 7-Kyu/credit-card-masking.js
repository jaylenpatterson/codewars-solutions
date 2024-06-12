function maskify(cc) {
    const MASKING_CHARACTER = "#";
  
    if (cc.length <= 4) {
      return cc;
    }
    
    if (cc.length > 4) {
      // Mask digits up to the last 4
      return MASKING_CHARACTER.repeat(cc.length - 4) + cc.slice(cc.length - 4);
    }
};