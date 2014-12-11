// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    predicate is called for every element with index from 0 to the length
    of the array, regardless of the element actually existing or not
---*/

var a = [];

a[10] = 1;
a[11] = 2;

var timesCalled = 0;

var b = a.findIndex(function (v) {
    timesCalled++;
	return v === 1;
});

if (b !== 10) {
	$ERROR('#1: b !== 10. Actual: ' + b);
}

if (timesCalled !== 11) {
    $ERROR('#2: Predicate should have been called for each empty element');
}
