const x = document.querySelector("#categories");

const xItems = x.querySelectorAll(".item");

// console.log(xItems);

console.log(`Number of categories: ${xItems.length}`);

xItems.forEach((x) => {
  const title = x.querySelector("h2").textContent;

  // console.log(title);

  const q = x.querySelectorAll("li").length;

  // console.log(elementsCount);

  console.log(`Category: ${title}`);
  console.log(`Elements: ${q}`);
});
