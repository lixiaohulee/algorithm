


const insertSort = (arr) => {
  for(let i = 1; i < arr.length; i++) {
    const cur = arr[i];

    let j = i - 1;
    while(j > 0 && cur < arr[j]) {
      arr[j+1] = arr[j];
      j--;
    }
    arr[j] = cur;
  }

  return arr;
}


const arr = [1,6,3];

console.log(insertSort(arr));