function endsWith(term, strOrArr) {
  let searchStr;
  let strToSearch;
  if (Array.isArray(term)) searchStr = term.join('');
  else searchStr = term;

  function curriedEndsWith(strOrArr) {
    if (Array.isArray(strOrArr)) strToSearch = strOrArr.join('');
    else strToSearch = strOrArr;

    const itemWidth = searchStr.length;
    const endStr = strToSearch.slice(-itemWidth);
    return searchStr === endStr;
  }

  if (strOrArr === undefined) {
    return curriedEndsWith;
  }

  return curriedEndsWith(strOrArr);
}

module.exports = endsWith;
