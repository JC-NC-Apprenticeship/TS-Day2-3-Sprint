function filter(predicate, arr) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    const shouldKeep = predicate(val, i, arr);
    if (shouldKeep) filtered.push(val);
  }
  return filtered;
}

module.exports = filter;
