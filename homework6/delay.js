const delay = (arr) => {
  const startIdx = 0;
  const arrLength = arr.length;

  const iter = (idx) => {
    setTimeout(() => {
      console.log(idx);
      if (idx < arrLength - 1) {
        idx += 1;
        iter(idx);
      }
    }, 3000);
  }

  iter(startIdx);
};
