const repeatString = function(word, timesToRepeat) {
  if (timesToRepeat < 0) {
    return 'ERROR';
  }

  let repeatedString = '';
  for (let i = 0; i < timesToRepeat; i++) {
    repeatedString += word;
  }

  return repeatedString;
}

module.exports = repeatString
