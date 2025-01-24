// let i = 1;
// window.setTimeout(() => {
//   console.log(i++)
// } , 2000)
console.log("START")
const mySetInterval = (cb, timer) => {
  // console.log(cb)

  const internalWrapper = () => {
    cb();
    // return setTimeout(internalWrapper, timer);
  }
  setTimeout(internalWrapper, timer)
}

mySetInterval(() => {
  let i = 0
  console.log("FINISHED")
}, 2000)
console.log("END")