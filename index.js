// ? 1) getData() - debouced
// ? 2) debounce -> getData(), delay
// ? 3) event -> keypress


function debounce(getData, delay){
  let timer;
  return function () {
    if(!timer) {
      getData();
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = undefined
    }, delay)
  }
}



// Debonced Function
function getData() {
  // fetch('/api/v1/getData')
  console.log('Getting Data');
}



// event function
const keypress = debounce(getData,3000)