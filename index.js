// const targetObject = {
//     // properties and methods
//   };
  
//   const handler = {
//     // traps for intercepting operations on the target object
//   };
  
//   const proxy = new Proxy(targetObject, handler);

// * ###################################################################

// Finding an array item object by its property
const products = new Proxy([
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' }
],
{
  get(obj, prop) {
    // The default behavior to return the value; prop is usually an integer
    if (prop in obj) {
      return obj[prop];
    }

    // Get the number of products; an alias of products.length
    if (prop === 'number') {
      return obj.length;
    }

    let result;
    const types = {};

    for (const product of obj) {
      if (product.name === prop) {
        result = product;
      }
      if (types[product.type]) {
        types[product.type].push(product);
      } else {
        types[product.type] = [product];
      }
    }

    // Get a product by name
    if (result) {
      return result;
    }

    // Get products by type
    if (prop in types) {
      return types[prop];
    }

    // Get product types
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]);          // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']);  // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']);   // undefined
console.log(products.browser);     // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types);       // ['browser', 'mailer']
console.log(products.number);      // 3


// * ###################################################################

const validator = {
    set(obj, prop, value) {
      if (prop === 'weight') {
        if (!Number.isInteger(value)) {
          throw new TypeError('The weight is not an integer');
        }
        if (value > 200) {
          throw new RangeError('The weight seems invalid');
        }
      }
  
      // The default behavior to store the value
      obj[prop] = value;
  
      // Indicate success
      return true;
    }
  };
  
  const fish = new Proxy({}, validator);
  
  fish.weight = 100;
  console.log(fish.weight); 
  // expected output: 100
  fish.weight = 'small';    // Throws an exception
  fish.weight = 300;        // Throws an exception

// * ###################################################################

// const letters = ['a', 'b', 'c', 'd', 'e'];

// const proxy = new Proxy(letters, {
//     get(target, prop) {
//         console.log("target-", target)
//         console.log("prop-", prop)
//         if (!isNaN(prop)) {
//             prop = parseInt(prop, 10);
//             if (prop < 0) {
//                 prop += target.length;
//             }
//         }
//         return target[prop];
//     }
// });

// proxy[0]

// * ###################################################################

const importantData = {
    name: 'John Doe',
    age: 42
}

const handler = {
    set: 'Read-Only',
    defineProperty: 'Read-Only',
    deleteProperty: 'Read-Only',
    preventExtensions: 'Read-Only',
    setPrototypeOf: 'Read-Only'
}

const proxy = new Proxy(importantData, handler)

proxy.name = "Kartik"

console.log(proxy)