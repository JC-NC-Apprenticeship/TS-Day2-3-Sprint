function before(noOfCalls, func) {
  let storedValue;
  return function (...args) {
    if (--noOfCalls > 0) {
      storedValue = func(...args);
    }
    return storedValue;
  };
}

module.exports = before;
