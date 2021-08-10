function once(func) {
  let called = false;
  let storedValue;
  return function (...args) {
    if (!called) {
      called = true;
      storedValue = func(...args);
    }
    return storedValue;
  };
}

module.exports = once;
