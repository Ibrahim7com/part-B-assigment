function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  const oldKeys = new Set(Object.keys(oldObj));
  const newKeys = new Set(Object.keys(newObj));

  // Keys only in newObj → added
  for (const key of newKeys) {
    if (!oldKeys.has(key)) {
      added[key] = newObj[key];
    }
  }

  // Keys only in oldObj → removed
  for (const key of oldKeys) {
    if (!newKeys.has(key)) {
      removed[key] = oldObj[key];
    }
  }

  // Keys in both → check for change
  for (const key of oldKeys) {
    if (newKeys.has(key) && oldObj[key] !== newObj[key]) {
      changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  return {
    added,
    removed,
    changed
  };
}


// Test the function
const oldObj = {
  name: "Ibrahim",
  age: 25,
  city: "Oyo"
};

const newObj = {
  name: "Ibrahim",
  age: 26,
  country: "Nigeria"
};


// Display the result
console.log(diffObjects(oldObj, newObj));