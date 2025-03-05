let timeOutIds = []

const originalSetTimeout = window.setTimeout;

const setTimeout = (fn, delay) => {
  const id = originalSetTimeout(fn, delay)
  timeOutIds.push(id);
  return id;
}

const clearAllTimeout = () => {
  while(timeOutIds.length) {
    clearTimeout(timeOutIds.pop())
  }

}

setTimeout(() => { console.log("Hello")}, 2000)
setTimeout(() => { console.log("Hello2")}, 3000)
setTimeout(() => { console.log("Hello3")}, 4000)
setTimeout(() => { console.log("Hello4")}, 5000)
setTimeout(() => { console.log("Hello5")}, 6000)

clearAllTimeout();