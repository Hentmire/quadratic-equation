module.exports = function solveEquation(equation) {
  var num1 = equation.indexOf('x') - 3;
  var num2 = equation.lastIndexOf('x') - 3;
  var num3 = num1 + 7;
  var num4 = num2 + 5;
  
  var a = Number( equation.substring(0, num1) );
  var strb = equation.substring(num3, num2);
  var b = Number( strb.substring(0, 1) + strb.substring(2) );
  var strc = equation.substring(num4);
  var c = Number( strc.substring(0, 1) + strc.substring(2) );

  var discr = (b*b - 4*a*c);
  var x1 = Math.round( (- b + Math.sqrt(discr) ) / (2*a) );
  var x2 = Math.round( (- b - Math.sqrt(discr) ) / (2*a) );

  var arr = [x1, x2];
  function compareNumbers(a, b) {
      return a - b;
  }
  arr.sort(compareNumbers);
  return arr;
}
