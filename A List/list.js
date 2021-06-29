arrayToList = (array) => {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
};
console.log(arrayToList([1, 2, 3]));

function listToArray(list) {
  var array = [];
  var item = list;
  while (item) {
    array.push(item.value);
    item = item.rest;
  }
  return array;
}
console.log(JSON.stringify(arrayToList([1, 2, 3, 4, 5, 6, 7])));
console.log(listToArray(arrayToList([1, 2, 4, 5, 6, 7])));

prepend = (start, end) => {
  let last = listToArray(end);
  last.unshift(start);
  last = arrayToList(last);
  return last;
};
console.log(prepend(10, prepend(20, null)));

nth = (arraylist, wantParam) => {
  let x;
  let y = 0;
  for (let i = arraylist; i; i = i.rest, y++) {
    if (y == wantParam) {
      x = i.value;
      break;
    }
  }
  return x;
};
console.log(nth(arrayToList([10, 20, 30]), 1));
