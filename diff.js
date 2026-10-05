function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};

  const oldKeys = new Set(Object.keys(oldObj));
  const newKeys = new Set(Object.keys(newObj));

  for (const key of newKeys) {
    if (!oldKeys.has(key)) {
      added[key] = newObj[key];
    }
  }

  for (const key of oldKeys) {
    if (!newKeys.has(key)) {
      removed[key] = oldObj[key];
    }
  }

  for (const key of oldKeys) {
    if (newKeys.has(key) && oldObj[key] !== newObj[key]) {
      changed[key] = {
        from: oldObj[key],
        to: newObj[key]
      };
    }
  }

  return { added, removed, changed };
}

if (typeof module !== "undefined") {
  module.exports = diffObjects;
}

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

console.log(diffObjects(oldObj, newObj));