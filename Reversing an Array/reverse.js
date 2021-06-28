function reverseArray(reversedValue) {
  let reversed = reversedValue.length - 1;
  myArray = [];
  for (let i = reversed; i >= 0; i--) {
    myArray.push(reversedValue[i]);
  }
  return myArray;
}
console.log(reverseArray(["A", "B", "C"]));
