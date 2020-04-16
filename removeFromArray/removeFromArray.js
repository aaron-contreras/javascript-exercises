const removeFromArray = function(array) {
  for (let i = 0; i < arguments.length; i++) {
    array.forEach((currentLetter, index) => {
      if (currentLetter === arguments[i]) {
        array.splice(index, 1);
      }
    });
  }
  
  return array;
}

module.exports = removeFromArray
