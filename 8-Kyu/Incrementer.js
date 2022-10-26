function incrementer(nums) { 
    let arr = [];
    // push remainder of incremented number % 10 into array
    for(let i = 0; i < nums.length; i++) {
      arr.push((nums[i] + i + 1) % 10)
    }
    return arr
}