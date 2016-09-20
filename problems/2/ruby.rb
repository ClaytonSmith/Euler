#!/usr/bin/env ruby

def fibb_gen( max )
  l, c = 0, 1
  while c <= max
    yield c
    c, l = c + l, c
  end
end

sum = 0

fibb_gen( 4_000_000 ) { |x| sum += ( x % 2 == 0 ) ? x : 0  }

puts sum
