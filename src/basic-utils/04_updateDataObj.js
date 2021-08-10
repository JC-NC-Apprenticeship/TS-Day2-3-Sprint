function updateDataObj(dataObj, updatesObj) {
  const updatesCopy = { ...updatesObj };
  for (let key in updatesCopy) {
    if (dataObj[key] === undefined) {
      delete updatesCopy[key];
    }
  }
  return { ...dataObj, ...updatesCopy };
}

module.exports = updateDataObj;
