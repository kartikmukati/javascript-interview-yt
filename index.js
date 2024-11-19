const target = {
  firstName: 'Kartik'
}

const source = {
  firstName: 'Kamal'
}

const source1 = {
  age: 20,
  city: 'Delhi'
}



const assign = (target, ...sources) => {
  for(const source of sources) {
    if(source) {
      for(const key in source) {
        target[key] = source[key]
      }
    }
  }
  return target
}

const returnObject = assign(target, source, source1)
console.log(returnObject)