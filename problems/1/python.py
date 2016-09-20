#!/usr/bin/env python

print sum(x for x in range(1000) if 0 in [x % 3, x % 5])
