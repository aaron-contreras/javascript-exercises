const reverseString = function(originalString) {
  let reversedString = '';
  for (let i = originalString.length - 1; i >= 0; i--) {
    reversedString += originalString[i];
  }

  return reversedString;
}

module.exports = reverseString
