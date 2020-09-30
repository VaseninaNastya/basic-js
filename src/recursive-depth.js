module.exports = class DepthCalculator {
  calculateDepth(arr){
    let count=1
    if(JSON.stringify(arr)==JSON.stringify(arr.flat(Infinity))){
      return count
    }else{
        count=count+this.calculateDepth(arr.flat())
        return count
    }
  }
};
