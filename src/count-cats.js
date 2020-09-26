

module.exports = function countCats(matrix) {
  let arr2 = [];
for (i = 0; i < matrix.length; i++) {
  for (j = 0; j < matrix[i].length; j++) {
    arr2.push(matrix[i][j]);
  }
}
let catArr = arr2.filter(function(number) {
  if (number =='^^'){
    return number
  }
});
  return catArr.length
};
