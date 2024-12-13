let attemptCounter = 0;

const fetchData = async (APIURL, retries, delay) => {
  try {
    
    attemptCounter++;
    if(attemptCounter <= 3) {
      throw new Error("Simulated network failure")
    }

    const response = await fetch(APIURL);
    console.log("Success:", response.status)
    return response.data;
  } catch(err) {
    console.log(`Attempt ${attemptCounter} failed with error ${err.message}`)
    if(retries > 0) {
      // setTimeout(() => {
      // }, delay)

      await new Promise(resolve => setTimeout(resolve,delay))
      fetchData(APIURL, retries - 1, delay)
    } else {
      throw new Error("All retries failed");
    }
  }

}

const APIURL = 'https://jsonplaceholder.typicode.com/posts/1'

fetchData(APIURL, 5, 1000);