// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: thisArg should be undefined if not provided (Strict mode)
flags: [onlyStrict]
---*/


[1].findIndex(function () {
	if (this !== undefined) {
	  $ERROR('#1: this !== undefined');
	}
});
