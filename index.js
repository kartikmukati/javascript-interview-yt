const arr = [1,2,3,4, [5,6,7,[2,4,5,[50,50,50]]],8,9];

// ? End Result | Output ->  [1,2,3,4,5,6,7,8,9]

const result = []
// * Deep Flatten I (Iterative - Recursive)
// function deepFlattenI (arr) {

//   for(item of arr) {
//     if(Array.isArray(item)) {
//       deepFlattenI(item);
//     } else {
//       result.push(item)
//     }
//   }
//   return result;

// }

// console.log(deepFlattenI(arr))


// * Deep Flatten II (Reduce & Concat - Recursive)

// function deepFlattenII(arr) {
//     return arr.reduce((acc, val) => {
//       // return acc.concat(val)
//       return acc.concat(Array.isArray(val) ? deepFlattenII(val) : val)
//     }, [])
// }

// console.log(deepFlattenII(arr))

// * Deep Flatten III (Iterative Queue)

// function deepFlattenIII(arr) {
//   const queue = [...arr];
//   while(queue.length) {
//     const next = queue.shift();
//     if(Array.isArray(next)) {      
//       queue.unshift(...next)
//     } else {
//       result.push(next)
//     }
//   }
//   return result
// }

// console.log(deepFlattenIII(arr));




// * Deep Flatten IV (Combined Unique Vlaues or Non String)

function deepFlattenIV (arr, level) {

  for(item of arr) {
    if(Array.isArray(item) && level > 0) {
      level--;
      deepFlattenIV(item, level);
    } else {
      result.push(item)
    }
  }
  return result;

}

console.log(deepFlattenIV(arr,3))