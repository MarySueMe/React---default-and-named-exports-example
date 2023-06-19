// name imports
// import { amount, doSomething } from './file2.js';

// default import
// import myCoolFunction from './file2.js';

import myCoolFunction, { amount, eatPizza } from './file2.js';

// renaming in the import
// import { amount as cash } from './file2.js';

console.log(amount);
eatPizza();
myCoolFunction();
