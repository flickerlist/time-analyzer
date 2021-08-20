export function parseToInt(text: string, defaultValue = 0): number {
  try {
    return parseInt(text);
  } catch(e) {
    console.error('Parse to int error: ', e);
    return defaultValue;
  }
}
