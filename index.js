const STATE = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED'
}

class MyPromise {
  constructor(callback) {
    // ? it can be pending, fulfilled or rejected
    this.state = STATE.PENDING;
    // ? stores callback function like then, catch, finally
    this.handlers = []; 
    // ? resolved or rejected value
    this.value = undefined;

    try {
      callback(this._resolve, this._reject)
    } catch(err) {

    }
  }

  _resolve = (value) => {
   this.updateResult(value, STATE.FULFILLED)
  }

  _reject = (value) => {
    this.updateResult(value, STATE.REJECTED)
  }

  then(onSuccess, onFail) {
     return new MyPromise((res, rej) => {
      this.addHandler(
        {
          onSuccess: function(value) {
            if(!onSuccess) {
              return res(value);
            }
            try {
              return res(onSuccess(value))
            }catch(err) {
              return rej(err)
            }
          },
          onFail: function(value) {
            if(!onFail)
              return rej(value);
            try {
              return res(onFail(value));
            } catch(err) {
              return rej(err)
            }
          }
        }
      )
    })
  }

  catch(onFail) {
    return this.then(null, onFail);
  }

  updateResult(value, state) {
    setTimeout(() => {

      if(this.state !== STATE.PENDING)
        return;

      this.value = value;
      this.state = state

      // to execute pending handler;
      this.executeHandlers();
    },0)
  }

  addHandler(handler){
    this.handlers.push(handler)
    this.executeHandlers();
  }

  executeHandlers() {
    if(this.state === STATE.PENDING)
      return null;

    this.handlers.forEach((handler) => {
      if(this.state === STATE.FULFILLED) {
        return handler.onSuccess(this.value)
      }
      return handler.onFail(this.value)
    })
    this.handlers = [];
  }
}

const promise = new MyPromise((resolve, reject) => {
  // resolve("hello")
  reject("reject")
})

promise.then((value) => {
  console.log('then-',value)
}).catch(err => {
  console.log(err)
})