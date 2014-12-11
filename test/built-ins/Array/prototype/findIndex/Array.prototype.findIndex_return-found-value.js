// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: FindIndex should return the index if predicate returns true
---*/

var testVals = [
	undefined,
	null,
	0,
	'string',
	String,
	this,
	true,
	[1,2,3]
];

var a;

for (var i = 0, len = testVals.length; i < len; i++) {
	a = testVals.findIndex(function (v) {
		return v === testVals[i];
	});
	if (a !== i) {
		$ERROR('#' + (i + 1) + ': a !== ' + i + '. Actual: ' + a);
	}
}
