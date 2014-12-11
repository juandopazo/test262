// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: thisArg should be global object if not provided (not Strict mode)
flags: [noStrict]
includes: [fnGlobalObject.js]
---*/


[1].findIndex(function () {
	if (this !== fnGlobalObject()) {
	  $ERROR('#1: this !== global object');
	}
});
