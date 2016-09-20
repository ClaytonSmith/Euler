#!/usr/bin/env node

'use strict'

var count = 0;

for( var i = 0; i <= 100; i++ ) count += !(i % 3) ? i : !( i % 5 ) ? i : 0;

console.log( count );
