// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// Create a Map
const fruit = new Map();

// Set Map Values
fruit.set("apples", 500);
fruit.set("bananas", 300);
fruit.set("oranges", 200);

//to get value
fruits.get("apples"); // Returns 500

//to change value
fruits.set("apples", 200);

//size
fruits.size;

//to delete
fruits.delete("apples");

//to check
fruits.has("apples");

//to get keys
fruits.keys();

//to get values
fruits.values();

//to get entries
// List all entries
let text = "";
fruits.forEach(function (value, key) {
  text += key + " = " + value;
});
//Or you can do this
fruits.entries();

//to clear
fruits.clear();
