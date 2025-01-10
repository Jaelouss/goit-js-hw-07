const allItems = document.querySelectorAll('.item');
const allHeaders = document.querySelectorAll('h2');
const allLists = document.querySelectorAll('.item > ul');

const listCounts = Array.from(allLists).map(
  (list) => list.querySelectorAll('li').length
);

console.log(`Number of categories: ${allItems.length}`);

allItems.forEach((item, index) => {
  console.log('Category:', allHeaders[index].textContent);
  console.log('Elements:', listCounts[index]);
});
