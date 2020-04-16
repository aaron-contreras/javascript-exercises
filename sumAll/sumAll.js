const sumAll = function(start, end) {
  if (isNotValidInput(start,end)) {
    return 'ERROR';
  }
  
  let range = [start, end];
  if (start > end) {
    range.reverse();
  }

  let sum = 0;
  for (let i = range[0]; i <= range[1]; i++) {
    sum += i;
  }
  
  return sum;
}

function isNotValidInput(start,end) {
  if (start < 0 || end < 0 || +start !== start || +end !== end) {
    return true;
  }
}

module.exports = sumAll
