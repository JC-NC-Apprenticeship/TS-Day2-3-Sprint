function map(callback, arr) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const mappedValue = callback(val, i, arr);
    mapped.push(mappedValue);
  }
  return mapped;
}

module.exports = map;
