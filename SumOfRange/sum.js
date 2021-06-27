function range(start, end) {
  myArray = [];
  for (i = start; i <= end; i++) {
    myArray.push(i);
  }
  return myArray;
}
function sum(number) {
  result = 0;
  for (let index = 0; index <= number.length; index++) {
    result += index;
  }
  return result;
}
console.log(sum(range(1, 10)));

function range(start, end, step) {
  arrayList = [];
  if (step == undefined) {
    for (let i = start; i <= end; i++) {
      arrayList.push(i);
    }
    return arrayList;
  } else if (start > end) {
    for (let i = start; i >= end; i += step) {
      arrayList.push(i);
    }
    return arrayList;
  } else {
    for (let i = start; i <= end; i += step) {
      arrayList.push(i);
    }
    return arrayList;
  }
}
console.log(range(1,5));
