const promise1 = Promise.resolve(5);

const promise2 = 2022;

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("rejected for testing")
  },1000)
})

const promiseArr = [promise1, promise2, promise3]

// Promise.allSettled(promiseArr).then((res) => {
//   console.log(res)
// })

const myAllSettled = (promiseArr) => {
  return new Promise((resolve, reject) => {
    let responses = [];
    let count = 0;
    promiseArr.forEach((value, index) => {
      let promise = value;

      if(!(value instanceof Promise)) {
        promise = Promise.resolve(value)
      }

      promise.then((data) => {
        responses[index] = {status: 'fulfilled', value: data}
        count++;
        if(count === promiseArr.length)
          resolve(responses)
      }).catch(err => {
        responses[index] = {status: 'rejected', reason: err}
        count++
        if(count === promiseArr.length)
          resolve(responses)
      })

    })
  })
}

Promise.myAllSettled = myAllSettled;

Promise.myAllSettled(promiseArr).then((result) => {
  console.log(result)
})