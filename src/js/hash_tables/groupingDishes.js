const groupingDishes = dishes => {
  let ingredientDishMap = {};
  for (let i = 0; i < dishes.length; i++) {
    let dish = dishes[i];
    let dishName = dish[0];

    for (let j = 1; j < dish.length; j++) {
      let ingredient = dish[j];
      if (ingredientDishMap[ingredient]) {
        ingredientDishMap[ingredient].push(dishName);
      } else {
        ingredientDishMap[ingredient] = [dishName];
      }
    }
  }

  // remove ingredients that only are in one dish
  for (let ingredient in ingredientDishMap) {
    if (ingredientDishMap[ingredient].length < 2) {
      delete ingredientDishMap[ingredient];
    }
  }

  // sort the result
  let sortedIngredients = Object.keys(ingredientDishMap).sort();
  let res = sortedIngredients.map(ingredient => {
    let sortedDishes = ingredientDishMap[ingredient].sort();
    return [ingredient].concat(sortedDishes);
  });

  return res;
};

module.exports = {
  groupingDishes
};
