"use strict";
function getRangeReport(start, end) {
  let total = 0
  const odds = []
  const evens = []
  const range = []

  for (let i = start; i <= end; i++) {
    total += i
    range.push(i)

    if (i % 2 === 0) {
      evens.push(i)
    } else {
      odds.push(i)
    }
  }
  const average = total / range.length

  return {
    total,
    odds,
    evens,
    range,
    average
  }
}

