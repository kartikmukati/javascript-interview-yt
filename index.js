const getFirstName = (person) => {
  return person.name;
}

// First Function
// const result1 = getFirstName({name: 'Unfiltered'})

// console.log(result1)

// Second Function
const getUpperCase = (name) => {
  return name.toUpperCase();
}

// const result2 = getUpperCase(result1)

// console.log(result2)

// Third Function
const get4Characters = (name) => {
  return name.substring(0,4)
}

// const result3 = get4Characters(result2)

// console.log(result3)

const reverse = (name) => {
  return name.split('').reverse().join('')
}

const result4 = reverse(get4Characters(getUpperCase(getFirstName({name: 'Kartik'}))))

console.log(result4)
