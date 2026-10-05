function deepFreeze(obj) {
  // Freeze the current object
  Object.freeze(obj);

  // Recursively freeze all nested objects
  Object.values(obj).forEach(value => {
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });

  return obj;
}

// Example object
const user = {
  name: "Ibrahim",
  age: 25,
  address: {
    city: "Oyo",
    country: "Nigeria"
  }
};

// Deep freeze the object
deepFreeze(user);

// Try to change the object
user.name = "John";
user.address.city = "Lagos";

// Display the result
console.log(user);
console.log("User frozen:", Object.isFrozen(user));
console.log("Address frozen:", Object.isFrozen(user.address));