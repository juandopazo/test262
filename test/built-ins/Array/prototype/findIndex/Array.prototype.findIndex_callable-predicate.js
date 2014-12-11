// Copyright (c) 2014 Yahoo Inc. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    Array.prototype.findIndex shouldn't throw a TypeError if
    IsCallable(predicate) is true; a function is callable
features: [Array#find]
---*/


[].findIndex(function () {});

