// ? Deep equality is a concept in JavaScript that involves comparing complex data structures, such as arrays and objects.
// * to determine if their contents are equal
// * checks whether the elements within nested structures are also equal.

const object1 = {
  firstName: 'Kartik',
  age: 20,
  city: 'Delhi',
  family: {
    fatherName: 'abc',
    motherName: 'abc1'
  }
}

const object2 = {
  firstName: 'Kartik',
  age: 20,
  city: 'Delhi',
  family: {
    fatherName: 'abc',
    motherName: 'abc1'
  },
}

const deepEqualObjects = (object1, object2) => {
  if(typeof object1 != 'object' || typeof object2 != 'object' || object1 === null || object2 === null) {
    return false;
  } else {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if(keys1.length != keys2.length) {
      return false;
    } else {
      for(const key of keys1) {
        if(!keys2.includes(key)) {
          return false;
        } else if(keys2.includes(key)) {
          const value1 = object1[key];
          const value2 = object2[key]

          if(typeof object1[key] == 'object') {
            if(!deepEqualObjects(object1[key], object2[key])) {
              return false;
            }
          } else if(value1 != value2) {
            return false;
          }
        }
      }
    }
    return true;
  }
}

console.log(deepEqualObjects(object1, object2))
