


const diff = (source: string, sourceStartIndex: number, target: string): boolean => {
  for (let i = 0; i < target.length; i++) {
    if (target[i] !== source[sourceStartIndex]) {
      return false;
    }
    sourceStartIndex++;
  }

  return true;
}

const isInclude = (source: string, target: string): number => {
  if (target.length > source.length) {
    return -1;
  }

  for (let i = 0; i < source.length; i++) {
    if (diff(source, i, target)) {
      return i;
    }
  }

  return -1;
}


console.log(isInclude('afasdfbvadsfa', 'ab'));