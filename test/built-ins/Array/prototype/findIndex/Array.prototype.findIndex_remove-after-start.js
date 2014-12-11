// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Elements removed from array after findIndex has been called should still be
    visited
---*/

[1, 'string', 2].findIndex(function (v, i, arr) {
	var stringIndex = arr.indexOf('string');
	if (stringIndex !== -1) delete arr[stringIndex];
	if (v === 'string') {
		$ERROR('#1: \'string\' should not exist, it has been deleted');
	}
});

var a = [1, 'string', 2];
var lastVisitedIndex = 0;
var originalLength = a.length;

a.findIndex(function (v, i, arr) {
	var stringIndex = arr.indexOf('string');
	if (stringIndex !== -1) arr.splice(stringIndex, 1);
	if (v === 'string') {
		$ERROR('#2: \'string\' should not exist, it has been deleted');
	}
	lastVisitedIndex = i;
});

if (lastVisitedIndex !== a.length - 1) {
	$ERROR('#3: Last visited index should be based on the original length of the array');
}
