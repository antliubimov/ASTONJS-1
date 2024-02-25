Function.prototype.bindPolyfill = function (obj, ...args) {
  if (typeof this !== 'function') {
    return;
  }
  const newObj = structuredClone(obj);

  Object.defineProperty(newObj, 'fn', { value: this });

  return (...newArgs) => {
    return newObj.fn(...args, ...newArgs);
  };
};
