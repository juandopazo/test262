// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: The length property of the findIndex method is 1
---*/

if ([].findIndex.length !== 1) {
	$ERROR('1: [].findIndex.length !== 1. Actual: ' + [].findIndex.length);
}
