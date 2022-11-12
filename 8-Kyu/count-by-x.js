function countBy(x, n) {
    let z = [];
    
    for (let i = 0; i < n; i++) {
      z.push(x * (i + 1));
    }
  
    return z;
}