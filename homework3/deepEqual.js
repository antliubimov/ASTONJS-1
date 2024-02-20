const deepEqual = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key)) {
      return false;
    }
    if (obj1[key] && typeof obj1[key] === 'object' && !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
    if (typeof obj1[key] !== 'object' && obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};

const obj1 = {
  here: { is: "on", other: "2" }, obj: {
    it: "on", ot: { it: 1 }
  }
};

const obj2 = { here: { is: "on", other: "2" }, obj: { it: "on", ot: { it: 2 } } };
console.log(deepEqual(obj1, obj2));