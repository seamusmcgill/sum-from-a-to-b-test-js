
const sum = function(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (toN === fromN) {
    return fromN;
  }
  return toN + sum(fromN, toN - 1);

};

console.log(sum(3, 7));

module.exports = sum;
