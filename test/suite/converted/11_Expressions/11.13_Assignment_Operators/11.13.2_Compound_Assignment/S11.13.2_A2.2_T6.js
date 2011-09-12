// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Operator uses PutValue
 *
 * @section 11.13.2, 16
 * @path 11_Expressions/11.13_Assignment_Operators/11.13.2_Compound_Assignment/S11.13.2_A2.2_T6.js
 * @description If Type(LeftHandSideExpression) is not Reference, throw ReferenceError (or SyntaxError). Check operator is "x <<= y"
 * @negative
 */

//CHECK#1
try {
  var z = (1 <<= 1);
  $ERROR('#1.1: 1 <<= 1 throw ReferenceError (or SyntaxError). Actual: ' + (z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: 1 <<= 1 throw ReferenceError (or SyntaxError). Actual: ' + (e));  
  } else {
    var z = (1 <<= 1);
  }
}
