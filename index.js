const promise1 = Promise.resolve(5);

const promise2 = 2022;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // reject(" Rejected: Try Again")
    resolve("Hello")
  },1000)
})

// Promise.all([promise1, promise2, promise3]).then((res) => {
//   console.log(res)
// })

const myAll = (promiseArr) => {
  let responses = []
  let count = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((promise, index) => {

      if(!(promise instanceof Promise)) {
        promise = Promise.resolve(promise)
      }

      promise.then((data) => {
        responses[index] = data;
        count++;

        if(promiseArr.length === count) {
          resolve(responses);
        }
      }).catch(err => {
        reject(err);
      })
    })
  })
}

Promise.myAll = myAll;

const promiseArr = [promise1,promise2, promise3]

Promise.myAll(promiseArr).then(data => {
  console.log(data)
})