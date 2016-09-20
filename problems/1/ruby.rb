#!/usr/bin/env ruby


puts (1..999).select{ |n| n % 3 == 0 or n % 5 == 0 }.reduce(0, :+)
