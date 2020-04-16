const removeFromArray = function(array, ...elements) {
  elements.forEach(toRemove => {
    array.forEach((currentElement, index) => {
      if (currentElement === toRemove) {
        array.splice(index, 1);
      }
    });
  });
  
  return array;
}

module.exports = removeFromArray
