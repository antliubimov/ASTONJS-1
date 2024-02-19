const getLength = (value) => {
  if (value && value.length !== undefined) {
    console.log(value.length);
  } else if (value && value.size !== undefined) {
    console.log(value.size);
  } else {
    console.log(0);
  }
}
