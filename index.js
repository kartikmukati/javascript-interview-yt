function log(level, date, message) {
  console.log(`[${level}] :: ${date} :: ${message}`)
}

// Callable
// log("DEBUG", new Date(), "This is a debug message")
// log("DEBUG", new Date(), "This is a debug message")
// log("DEBUG", new Date(), "This is a debug message")
// log("DEBUG", new Date(), "This is a debug message")
// log("DEBUG", new Date(), "This is a debug message")
// log("DEBUG", new Date(), "This is a debug message")
// log("DEBUG", new Date(), "This is a debug message")
// log("DEBUG", new Date(), "This is a debug message")
// log("DEBUG", new Date(), "This is a debug message")

// Currying
// log("DEBUG")(new Date())("This is a debug message")


function curry(log) {
  return function curried (...args) {
    if(args.length >= log.length) {
      log.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  } 
}

const rN = curry(log)("DEBUG")(new Date())

rN("This is a debug message")
rN("This is a debug message 1")
rN("This is a debug message 2")
rN("This is a debug message 3")
rN("This is a debug message 4")
