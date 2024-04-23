function countPositivesSumNegatives(input) {
    let y=[0,0];
    for(i of input){
      let p=i*-1
      if (p===-i){
        y[0]+=i}
      else if (p===i){
        y[1]+=i}
    }
    return y;
  }
  hello
  countPositivesSumNegatives(hello)