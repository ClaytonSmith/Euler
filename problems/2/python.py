#!/usr/bin/env python

def fib_gen(max ):
    l, c = 0, 1
    while c <= max:
        yield c
        c, l = c + l, c


print sum(x for x in fib_gen( 4000000 ) if not ( x % 2 ) )
