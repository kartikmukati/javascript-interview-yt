// console.log("START")
// setTimeout(() => {
//   console.log("setTimeout")
// }, 2000)
// console.log("END")

// const mySetTimeout = (cb, timer) => {
//   let startTime = new Date().getTime();
//   // console.log(startTime)
//   let futureTime = startTime + timer;
//   // console.log(futureTime)
//   while(new Date().getTime() <= futureTime) {
    
//   }
//   return cb();
// }

// mySetTimeout(() => {
//   console.log("FINISHED")
// }, 2000)

const mySetTimeout = (cb, timer) => {
  let startTime = new Date().getTime();
  // console.log(startTime);

  let executeSetTimeout = (...args) => {
    let currentTime = new Date().getTime();
    // console.log(currentTime)
    // console.log("currentTime - startTime",currentTime - startTime)

    if(currentTime - startTime >= timer) {
      cb()
    } else {
      requestAnimationFrame(() => executeSetTimeout(...args))
    }

  }

  requestAnimationFrame(executeSetTimeout)

}

console.log("START")
mySetTimeout(() => {
  console.log("FINISHED")
}, 3000)
console.log("END")
