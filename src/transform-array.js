

module.exports = function transform( arr ) {
  let checkArr = [`--discard-next`, `--discard-prev`, `--double-next`, `--double-prev`]
let newArr = arr.slice();
let newArr3 =[]
newArr.forEach(function(item, index) {
  let indexOfItem=checkArr.indexOf(item)
  switch (indexOfItem) {
    case 0:
      if(index!=newArr.length-1){
        delete newArr[index]
        delete newArr[index+1]
      }else{
        delete newArr[index]
      }
    break;
    case 1:
      if(index!=0){
        delete newArr[index]
        delete newArr[index-1]
      }else{
        delete newArr[index]
      }
    break;
    case 2:
      if(index!=newArr.length-1){
        delete newArr[index]
        newArr.splice(index, 1, newArr[index+1])
      }else{
        delete newArr[index]
      }
      break;
    case 3:
      if(index!=0){
        delete newArr[index]
        newArr.splice(index, 1, newArr[index-1])
      }else{
        delete newArr[index]
      }
        break;
    default:
      return newArr
}
  }
)
newArr.forEach(function(item){
if(item!==( undefined)){
  newArr3.push(item)
}
})
return newArr3
}

