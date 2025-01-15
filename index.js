const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("first promise");
  }, 100);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second promise");
  }, 100);
});

const promiseArr = [promise1, promise2]

// Promise.race(promiseArr).then(data => {
//     console.log(data)
// })

const myRace = (promiseArr) => {
    return new Promise((resolve, reject) => {
        if(promiseArr.length > 0) {
            promiseArr.forEach((value, index) => {
                let promise = value;
                promise.then(data => {
                    resolve(data)
                }).catch(e => {
                    reject(e)
                })
            })
        }
    })
}

Promise.myRace = myRace;

Promise.myRace(promiseArr).then(data => {
    console.log(data)
})