const getFirstName = (person) => {
  return person.name;
};

const getUpperCase = (name) => {
  return name.toUpperCase();
};

const get4Characters = (name) => {
  return name.substring(0, 4);
};

const reverse = (name) => {
  return name.split("").reverse().join("");
};

const orignal = (name) => {
    return name.split("").reverse().join("");
}



const pipe = (...args) => (person) => {
    return args.reduce((input, currentFunction) => {
        return currentFunction(input)
    }, person)
}

const result = pipe(
    getFirstName,
    getUpperCase,
    get4Characters,
    reverse,
    orignal
)({name: "Kartik"})

console.log(result)
















// function pipe(welcome) {
//     return function (name) {
//         console.log(welcome, name)
//     }
// }

// pipe("Hello")("Kartik")

// ? ES6

// const pipe = (welcome) => (name) => {
//     console.log(welcome, name)
// }

// pipe("Hello")("Kartik")