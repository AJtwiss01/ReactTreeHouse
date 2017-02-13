var sum = function sum() {
  var result = 0;

  [5, 5, 5].forEach(function addTo(number) { result += number; });

  return result;
};

test('Lambdas.', function () {
  equal(sum(), 15,
    'result should be 15.');
});