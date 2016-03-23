getJasmineRequireObj().toEqual = function() {

  function toEqual(util, customEqualityTesters) {
    customEqualityTesters = customEqualityTesters || [];

    return {
      compare: function(actual, expected) {
        var result = {
            pass: false
          },
          diffBuilder = util.DiffBuilder();

        result.pass = util.equals(actual, expected, customEqualityTesters, diffBuilder);

        if (!result.pass) {
          result.message = util.buildFailureMessage('toEqual', false, actual, expected) + diffBuilder.message()
        }

        return result;
      },
    };
  }

  return toEqual;
};
