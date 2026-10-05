function deepEqual(objA, objB) {
  // Handle identical references, primitive equality, and NaN equality.
  if (Object.is(objA, objB)) return true;

  // Both must be non-null objects.
  if (objA === null || objB === null) return false;
  if (typeof objA !== "object" || typeof objB !== "object") return false;

  // Compare special object types consistently.
  if (objA instanceof Date && objB instanceof Date) {
    return objA.getTime() === objB.getTime();
  }

  if (objA instanceof RegExp && objB instanceof RegExp) {
    return objA.toString() === objB.toString();
  }

  // Arrays must have the same structure and contents.
  if (Array.isArray(objA) !== Array.isArray(objB)) return false;

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // Different number of keys → not equal.
  if (keysA.length !== keysB.length) return false;

  // Recursively compare every key/value.
  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) return false;
    if (!deepEqual(objA[key], objB[key])) return false;
  }

  return true;
}

if (typeof module !== "undefined") {
  module.exports = deepEqual;
}