

const diff = (s1: string, s2: string): number[] => {
  const indexArr: number[] = [];


  let i = 0;
  let j = 0;

  while (i < s1.length && j < s2.length) {
    if (s1[i] !== s2[j]) {
      indexArr.push(j);
    }
    i++;
    j++;
  }

  while (j < s2.length) {
    indexArr.push(j);
    j++;
  }

  return indexArr;
}


const s1 = '12232';
const s2 = '123dfd';

console.log(diff(s1, s2));



