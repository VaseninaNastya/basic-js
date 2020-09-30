module.exports = function repeater(str, options) {
  let arr = [];
  let arr2 = [];
  if(str === null){str ="null" }
  if(options.addition === null){options.addition ="null" }
  if(options.repeatTimes==undefined){options.repeatTimes =1}
  if(options.additionRepeatTimes==undefined){options.additionRepeatTimes =1}
while(arr.length<options.repeatTimes*2-1){
  arr.push(str)
  if(options.separator==undefined){
    arr.push('+')
  }else{
    arr.push(options.separator)
  }
}
arr.splice(arr.length-1,1)
while(arr2.length<options.additionRepeatTimes*2-1){
  arr2.push(options.addition)
  if(options.additionSeparator==undefined){
    arr2.push('|')
  }else{
    arr2.push(options.additionSeparator)
  }
}
arr2.splice(arr2.length-1,1)
arr2 = arr2.join('')
arr = arr.map(function(item){
  if (item==str){
    item=  str +  arr2 
    return item
  }else{
    return item
  }
})
return arr.flat().join('')
};
