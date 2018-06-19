//This program shows the use of nested functions
//Also looks like a neat pattern that we can reuse
const hummus = function(factor) {
  const ingredent = function(amount, unit, name) {
    let ingredentAmount = factor * amount;
    if (ingredentAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredentAmount} ${unit} ${name}`)
  }
  ingredent(1, 'can', 'chickpeas');
  ingredent(0.25, 'cup', 'tahini');
  ingredent(0.25, 'cup', 'lemon juice');
  ingredent(1, 'clove', 'garlic');
  ingredent(1, 'table spoon', 'olive oil');
  ingredent(1, 'teaspoon', 'cumin');
};
