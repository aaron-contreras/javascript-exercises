const ftoc = function (farenheit) {
  const celsius = (farenheit - 32) * 5 / 9;
  const temperature = +celsius.toFixed(1);
  return temperature;
}

const ctof = function (celsius) {
  const farenheit = celsius * 9 / 5 + 32;
  const temperature = +farenheit.toFixed(1);
  return temperature;
}

module.exports = {
  ftoc,
  ctof
}
