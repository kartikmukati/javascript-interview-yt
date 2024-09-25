function log(level, date, message) {
  console.log(`[${level}] :: ${date} :: ${message}`)
}

// log("DEBUG", new Date(), "This is a debug message");


function curry(log) {
  return function curried(...args) {
    if(args.length >= log.length) {
      log.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

const cLog = curry(log);

const debugNow = cLog("INFO")(new Date())("This is a debug message")

// debugNow(new Date(),"This is a debug message")



