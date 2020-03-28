//Practice of methods in array

const firstMethod = [1, 2, 3];
console.log("First Method" + firstMethod);

const secondMethod = Array("usman", "nouman");
console.log("Second Method" + secondMethod);

const thirdMethod = Array.of("usman", "nouman", "adnan");
thirdMethod.push("ahsan");
console.log("Third Method" + thirdMethod);

const li = document.querySelectorAll("li");
const item = Array.from(li);
console.log("list Method" + item);

const fourthMethods = [
  [1, 2, 3],
  [4, 5, 6]
];

for (const oneNumber of fourthMethods) {
  console.log(oneNumber + "printing first array output");
  for (const noInsideNumber of oneNumber) {
    console.log("Fourth Method " + noInsideNumber);
  }
  console.log(oneNumber + "printing seond array output");
}

const checkIndex = [1, 2, 3, 4, 5];
console.log(checkIndex.indexOf(5));

const anotherMethod = [
  { name: "usman" },
  { name: "nouman" },
  { name: "adnan" },
  5
];
const usman = anotherMethod.find((person, index, allPerson) => {
  return person.name === "usman";
});
console.log(usman, anotherMethod);

const noumanIndex = anotherMethod.findIndex((person, index, allPerson) => {
  return person.name === "nouman";
});

console.log(noumanIndex);
//includes
console.log(anotherMethod.includes(5));

//forEach()
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price, index, prices) => {
  const priceObject = {
    index: index,
    taxAdjPrice: price * (1 + tax)
  };
  taxAdjustedPrices.push(priceObject);
});
console.log(taxAdjustedPrices);

const taxAdjustedPriceMap = prices.map((price, index, prices) => {
  const priceObject = { index: index, taxAdjPrice: price * (1 + tax) };
  return priceObject;
});
console.log(taxAdjustedPriceMap);

const sortArray = prices.sort((firstValue, secondValue) => {
  if (firstValue > secondValue) {
    return 1;
  } else if (firstValue === secondValue) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortArray);

// reversing
console.log(sortArray.reverse());

const filteredArray = prices.filter(price => {
  return price > 6;
});
console.log(filteredArray);

//reduce Mathod()
const sumUsingReduce = prices.reduce((prevVal, nextval) => {
  return prevVal + nextval;
});
console.log(sumUsingReduce);
