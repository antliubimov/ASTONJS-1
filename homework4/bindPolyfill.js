Function.prototype.bindPolyfill = function (obj, ...args) {
  Object.defineProperty(obj, 'fn', { value: this });

  return (...newArgs) => {
    return obj.fn(...args, ...newArgs);
  };
};
