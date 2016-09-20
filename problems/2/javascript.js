#!/usr/bin/env node

'use strict'

function fibbGen(max){
    var c = 0, n = 1;
    return function(){

        if ( c  >= max ) return null;

        var t = n;
        n = n + c;
        c = t;

        return c;
    };
}

var gen = fibbGen( 4000000 );
var sum = 0, val;

while( val = gen() ) sum += ( val % 2 ) ? 0 : val;
console.log( sum );
