const reverseString = function(originalString) {
  let characters = originalString.split('');
  characters.reverse();
  const reversedString = characters.join('');
  return reversedString;
}

module.exports = reverseString
