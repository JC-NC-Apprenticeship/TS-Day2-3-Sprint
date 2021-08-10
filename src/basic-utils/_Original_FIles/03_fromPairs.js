const fromPairs = (personalityPairs) => {
  const obj = {};

  for (let i = 0; i < personalityPairs.length; i++) {
    obj[personalityPairs[i][0]] = personalityPairs[i][1];
  }

  return obj;
};

module.exports = fromPairs;
