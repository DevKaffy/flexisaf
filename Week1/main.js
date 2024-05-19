// let and const
let carName = "Volvo";
console.log(carName);

const x = 50;
console.log(x);

let a = 5;
let b = 10;
a = 30;
b = 5;
console.log(a + b);

const c = 5;
const d = 10;
const e = c + d;
console.log(e);

let firstName = "John",
  lastName = "Doe",
  age = 35;
console.log(firstName, lastName, age);

console.log(10 * 5);
console.log(10 / 5);
console.log(15 % 9);

const i = {
  firstName: "John",
  lastName: "Doe",
};
console.log(typeof i);

// Regular function
function theFunction() {
  return "Hello";
}
console.log(theFunction());

// Arrow function
const myFunction = () => "Hello";
console.log(myFunction());

// object
const person = {
  firstName: "John",
  lastName: "Doe",
};
console.log(person.firstName);

// Create an object called person with name = John, age = 50.
// Then, access the object to log out ("John is 50").

const one = {
  name: "John",
  age: 50,
};
console.log(one.name + " is " + one.age);

// forEach
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
console.log(sum);
numbers.forEach((num) => (sum += num));
console.log(sum);

// map
// Map the products array to its corresponding prices.
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
const productsPrice = products.map(
  (product) => `${product.product}:${product.price}`
);
console.log(productsPrice);

// Change countries toUpperCase
const countries = [
  "Nigeria",
  "Ghana",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Mexico",
  "Japan",
  "Kenya",
];
const countriesToUpperCase = countries.map((country) => country.toUpperCase());
console.log(countriesToUpperCase);

// filter
const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);
console.log(countriesContainingLand);

const countriesEndsByia = countries.filter((country) => country.endsWith("ia"));
console.log(countriesEndsByia);

const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
);
console.log(countriesHaveFiveLetters);

// reduce
const digits = [1, 2, 3, 4, 5];
const sumDigits = digits.reduce((acc, cur) => acc + cur, 0);
console.log(sumDigits);

// Shopping List
let jsFeatures = [
  "Scope",
  "Let",
  "Const",
  "Arrow functions",
  "Array",
  "Objects",
];
console.log(jsFeatures);
let list = document.getElementById("listEl");
for (let i = 0; i < jsFeatures.length; i++) {
  let li = document.createElement("li");
  li.textContent = jsFeatures[i];
  list.appendChild(li);
}

//  FAQs
const dataArray = [
  {
    title: "What is an Array?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic tempora rerum alias, facere aut nobis quasi voluptas non expedita soluta exercitationem officiis consequatur in enim ex natus repellat ipsum",
  },
  {
    title: "Is Javascript simple?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic tempora rerum alias, facere aut nobis quasi voluptas non expedita soluta exercitationem officiis consequatur in enim ex natus repellat ipsum",
  },
  {
    title: "How can I learn Javascript?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic tempora rerum alias, facere aut nobis quasi voluptas non expedita soluta exercitationem officiis consequatur in enim ex natus repellat ipsum",
  },
  {
    title: "Why is Array important in JS?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic tempora rerum alias, facere aut nobis quasi voluptas non expedita soluta exercitationem officiis consequatur in enim ex natus repellat ipsum",
  },
  {
    title: "Difference between let and const?",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic tempora rerum alias, facere aut nobis quasi voluptas non expedita soluta exercitationem officiis consequatur in enim ex natus repellat ipsum",
  },
];

const makeHTML = (data) => {
  return `<details>
  <summary>${data.title}</summary>
  <p>${data.detail}</p>
   </details>`;
};

const faqContainer = document.querySelector(".faq-container");
faqContainer.innerHTML = dataArray
  .map((dataItem) => makeHTML(dataItem))
  .join("");
