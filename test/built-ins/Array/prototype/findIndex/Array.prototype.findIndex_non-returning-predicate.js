// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: FindIndex with a predicate with no return value should return -1
---*/

var a = [1, 2, 3].findIndex(function () {});

if (a !== -1) {
	$ERROR('#1: a !== -1. Actual: ' + a);
}
