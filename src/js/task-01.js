const categoriesItemsRef = document.querySelectorAll('.item');

categoriesItemsRef.forEach(item => {
    const titleCategoryRef = item.querySelector('h2');
    const quantityItemRef = item.querySelectorAll('li');
    console.log(`Category: ${titleCategoryRef.textContent} \nElement: ${quantityItemRef.length}`);
});