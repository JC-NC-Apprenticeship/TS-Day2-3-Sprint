function moveListItem(from, to, list) {
  const listCopy = [...list];
  const listLength = listCopy.length;
  const item = listCopy.splice(from % listLength, 1)[0];
  listCopy.splice(to % listLength, 0, item);
  return listCopy;
}

module.exports = moveListItem;
