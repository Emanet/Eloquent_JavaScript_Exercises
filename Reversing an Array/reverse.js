function reverseArray(reversedValue) {
  let reversed = reversedValue.length - 1;
  myArray = [];
  for (let i = reversed; i >= 0; i--) {
    myArray.push(reversedValue[i]);
  }
  return myArray;
}
console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [5, 10, 15, 20, 25];
reverseArrayInPlace = (reverseValueIn) => {
  for (let i = reverseValueIn.length - 1; i >= 0; i--) {
    reverseValueIn.push(reverseValueIn[i]);
  }
  return reverseValueIn.slice(reverseValueIn.length / 2, reverseValueIn.length);
};
console.log(reverseArrayInPlace(arrayValue));
