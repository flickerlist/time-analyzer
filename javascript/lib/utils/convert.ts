export function parseToInt(text: string, defaultValue = 0): number {
  try {
    return parseInt(text);
  } catch(e) {
    console.error('Parse to int error: ', e);
    return defaultValue;
  }
}

// stringify object
export function objectToString(obj: any, exceptKey: string[] = []) {
  const result = {};
  for(const key of Object.keys(this)) {
    if (!Object.prototype.hasOwnProperty.call(this, key) || exceptKey.indexOf(key) >= 0) {
      continue;
    }
    result[key] = this[key];
  }
  return JSON.stringify(result);
}