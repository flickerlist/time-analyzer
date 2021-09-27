export function parseToInt(text: string, defaultValue = 0): number {
  try {
    return parseInt(text);
  } catch(e) {
    console.error('Parse to int error: ', e);
    return defaultValue;
  }
}

export function parseToMonthValue(text: string): -1 | number {
  const value = parseToInt(text, 0);
  return value < 0
    ? -1
    : (value === 0? -1 : value - 1);
}
