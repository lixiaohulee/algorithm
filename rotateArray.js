



const rotateArray = (numArr, k) => {
  const len = numArr.length;

  const step = k % len;

  for(let i = 0; i < step; i++) {
    const temp = numArr[len -1];

    for (let j = len -1; j > 0; j--) {
      numArr[j] = numArr[j-1];
    }

    numArr[0] = temp;
  }
}


const arr = [1,2,3,4,5];

rotateArray(arr, 6);

console.log(arr);