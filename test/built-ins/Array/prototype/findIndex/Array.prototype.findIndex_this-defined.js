// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: thisArg should be bound to this if provided
---*/

var globalThis = this;

[1].findIndex(function () {
    assert.sameValue(this, Array, 'this should equal Array');
    assert.notSameValue(this, globalThis, 'this should not equal globalThis');
}, Array);
