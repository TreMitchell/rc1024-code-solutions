interface RangeReport {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}


function getRangeReport(start: number, end: number): RangeReport {
  let total = 0;
  const odds: number[] = [];
  const evens: number[] = [];
  const range: number[] = [];

  for (let i = start; i <= end; i++) {
    total += i;
    range.push(i);

    if (i % 2 === 0) {
      evens.push(i);
    } else {
      odds.push(i);
    }
  }
  const average: number = total / range.length;

  return {
    total,
    odds,
    evens,
    range,
    average,
  };
}
