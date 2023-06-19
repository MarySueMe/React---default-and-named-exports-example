const amount = 20;

function doSomething() {
  console.log('doing something...');
}

function eatPizza() {
  console.log('eating pizza...');
}

// named exports
export { amount, eatPizza };

// default export
export default doSomething;
