var DnaTranscriber = function () {
};

  DnaTranscriber.prototype.toRna = function (input) {
    var dnaToRna = {
      C: 'G',
      G: 'C',
      A: 'U',
      T: 'A'
    };

    var transcribedInput = input.replace(/C|G|A|T/g, function(letter){
      return dnaToRna[letter];
    });
    return transcribedInput;
  };

module.exports = DnaTranscriber;
