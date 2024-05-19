// W3SCHOOLS EXERCISE

// let carName = "Volvo";
// console.log(carName);

// let x = 50;
// console.log(x);

// let a = 5;
// let b = 10;
// console.log(a + b);

// let c = 5;
// let d = 10;
// let e = c + d;
// // alert(e);

// let firstName = "John",
//   lastName = "Doe",
//   age = 35;
// console.log(firstName, lastName, age);

// alert(10 * 5);
// alert(10 / 5);
// alert(15 % 9);

x = 10;
y = 5;
console.log((x += y));
console.log((x *= y));

let length = 16;
console.log(typeof x);

let lasName = "Johnson";
console.log(typeof lasName);

const i = {
  firstName: "John",
  lastName: "Doe",
};
console.log(typeof i);

function myFunction() {
  alert("Hello World!");
}
myFunction();

function myFunction() {
  return "Hello";
}
console.log(myFunction());

// const person = {
//   firstName: "John",
//   lastName: "Doe",
// };
// console.log(person.firstName);

// Create an object called person with name = John, age = 50.
// Then, access the object to alert("John is 50").
// const one = {
//   name: "John",
//   age: 50,
// };
// console(one.name + " is " + one.age);

// let txt = "Hello World!";
// let z = txt.length;
// console(z);

// let text = 'We are "Vikings"';
// console.log(text);

// let txit = "Hello World!";
// txt = txt.toUpperCase();
// console.log(txit);

const taxt = "I can eat bananas all day";
let hi = taxt.slice(10, 17);
console.log(hi);

// Shopping List
let shoppingItems = [
  "Milk",
  "Milo",
  "Sugar",
  "Detergent",
  "perfume",
  "Toothpaste",
];
console.log(shoppingItems);
let list = document.getElementById("listEl");
for (let i = 0; i < shoppingItems.length; i++) {
  let li = document.createElement("li");
  li.textContent = shoppingItems[i];
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
  .join(" ");
