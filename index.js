const promise1 = Promise.reject(5);

// const promise2 = 2022;
const promise2 = Promise.reject("reject");

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject for testing")
  },1000)
})

const promiseArr = [promise1, promise2, promise3]

// Promise.any(promiseArr).then((res) => {
//   console.log(res)
// })

const myAny = (promiseArr) => {
  let count = 0;
  return new Promise((resolve, reject) => {
    promiseArr.forEach((value, index) => {
      let promise = value;

      if(!(value instanceof Promise)) {
        promise = Promise.resolve(value);
      }

      promise.then((data) => {
        resolve(data);
      }).catch(e => {
        count++;
        if(count === promiseArr.length) {
          reject(new AggregateError([], "All promises were rejected"))
        }
      })

    })
  })
}

Promise.myAny = myAny;

Promise.myAny(promiseArr).then(res => {
  console.log(res)
})