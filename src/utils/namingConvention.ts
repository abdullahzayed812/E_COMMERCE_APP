// Convert camelCase to snake_case
export function camelToSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
}

// Convert snake_case to camelCase
export function snakeToCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

// Convert object keys from camelCase to snake_case
export function convertObjectKeysToSnakeCase(obj: any): any {
  const result: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[camelToSnakeCase(key)] = obj[key];
    }
  }
  return result;
}

// Convert object keys from snake_case to camelCase
export function convertObjectKeysToCamelCase(obj: any): any {
  const result: any = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[snakeToCamelCase(key)] = obj[key];
    }
  }
  return result;
}
