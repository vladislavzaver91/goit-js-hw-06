const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// const ingredientsRef = document.querySelector('#ingredients');
// const newListElem = [];

// ingredients.forEach((element) => {
//   const listItemsRef = document.createElement('li');
//   listItemsRef.textContent = `${element}`;
//   listItemsRef.classList.add('item');
//   return newListElem.push(listItemsRef);
// });

// ingredientsRef.append(...newListElem);
// console.log(ingredientsRef);

// -------способ решения через 'Map'-----------

const ingredientsRef = document.querySelector('#ingredients');
const newListElem = [];

const newIngredientsRef = ingredients.map(element => {
  const listItemsRef = document.createElement('li');
  listItemsRef.textContent = `${element}`;
  listItemsRef.classList.add('item');
  return newListElem.push(listItemsRef);
});

ingredientsRef.append(...newListElem);
console.log(ingredientsRef);