var Hamming = function() {};

Hamming.prototype.compute = function( first, second ) {
  var sum = 0;
  if (first.length != second.length) {
    throw 'DNA strands must be of equal length.';
  }
  for (var i = 0; i <= first.length; i++) {
    if (first.charAt(i) !== second.charAt(i)) {
      sum++;
    }
  }
  return sum;
};

module.exports = Hamming;
