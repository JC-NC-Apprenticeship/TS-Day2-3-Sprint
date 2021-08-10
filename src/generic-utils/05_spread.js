function spread(func) {
  return function (arr) {
    return func.apply(this, arr);
  };
}

module.exports = spread;
