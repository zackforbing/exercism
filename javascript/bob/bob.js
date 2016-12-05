//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  var response,
      isYelling  = input === input.toUpperCase() && input !== input.toLowerCase(),
      isQuestion = input.slice(-1) === "?",
      isSilence  = input.replace(/\s/g, '') === '';

  if (isYelling) {
    response = "Whoa, chill out!";
  } else if (isQuestion) {
    response = "Sure.";
  } else if (isSilence) {
    response = "Fine. Be that way!";
  } else {
    response = "Whatever.";
  }
  return response;
};

module.exports = Bob;
