export function rangeSum(a, b) {
  const start = Math.min(a, b);
  const end = Math.max(a, b);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

export function iterationCount(number) {
  let value = number;
  let count = 0;

  while (value > 0.1) {
    value = value / 2;
    count++;
  }

  return count;
}

export function symbolsReplace(text) {
  let result = '';
  let i = 0;

  if (text.length === 0) {
    return result;
  }

  do {
    result += (i + 1) % 3 === 0 ? '_' : text[i];
    i++;
  } while (i < text.length);

  return result;
}
