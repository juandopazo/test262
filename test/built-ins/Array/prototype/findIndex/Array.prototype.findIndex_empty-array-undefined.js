// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: FindIndex on empty array should return -1
---*/

var a = [].findIndex(function () {
	return true;
});

if (a !== -1) {
	$ERROR('#1: a !== -1. Actual: ' + a);
}
