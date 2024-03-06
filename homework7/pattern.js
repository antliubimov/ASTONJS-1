const makePattern = (n, fn, separator) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    const data = fn(i);
    result.push(data);
  }

  for (let i = n - 1; i > 0; i--) {
    const data = fn(i);
    result.push(data);
  }

  return result.join(separator);
};

const pattern = (n) => {
  if (n < 1) {
    return '';
  };

  const strFn = (i) => {
    const str = makePattern(i, (i) => i, '');
    return `${' '.repeat(n - i)}${str}`;
  };

  return makePattern(n, strFn, '\n');
};
