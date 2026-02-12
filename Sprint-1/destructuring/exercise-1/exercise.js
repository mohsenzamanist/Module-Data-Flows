const personOne = {
  name: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};

// Update the parameter to this function to make it work.
// Don't change anything else.
function introduceYourself({
  name = "NO_NAME_PROVIDED",
  age = "NO_AGE_PROVIDED",
  favouriteFood = "NO_FOOD_PROVIDED",
} = {}) {
  console.log(
    `Hello, my name is ${name}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself();
