function isNil(arg) {
  if (arg === null) return true;
  if (arg === undefined) return true;
  return false;
}

module.exports = isNil;
