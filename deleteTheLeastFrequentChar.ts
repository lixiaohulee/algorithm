

//“ababac” —— “ababa”
//“aaabbbcceeff” —— “aaabbb”

const deleteTheLeastFrequentChar = (str: string): string => {
  const charArr = str.split('');

  const map = new Map<string, number>(); // O(n)

  for (let i = 0; i < charArr.length; i++) {   // O(n)
    const curChar = charArr[i];

    const count = map.get(curChar);
    if (undefined === count) {
      map.set(curChar, 1);
    } else {
      map.set(curChar, count + 1);
    }
  }

  let min = Number.MAX_SAFE_INTEGER;
  let minCharArr: string[] = [];

  const mapArr = Array.from(map);
  for (let i = 0; i < mapArr.length; i++) {  //O(n)
    const [char, count] = mapArr[i];
    
    if (count < min) {
      min = count;
      minCharArr = [];
    } else if (count === min) {
      minCharArr.push(char);
    }
  }

  const newCharArr: string[] = [];
  for (let i = 0; i < charArr.length; i++) {  //O(n2)
    const temp = charArr[i];
    if (minCharArr.includes(temp)) {
      continue;
    }

    newCharArr.push(temp);
  }

  return newCharArr.join();
}


console.log(deleteTheLeastFrequentChar("ababac"));