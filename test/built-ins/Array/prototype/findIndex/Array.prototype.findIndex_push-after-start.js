// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Elements added to array after findIndex has been called should not be
    visited
---*/

[1].findIndex(function (v, i, arr) {
	arr.push('string');
	if (v === 'string') {
		$ERROR('#' + i + ': \'string\' should not be visited');
	}
});
