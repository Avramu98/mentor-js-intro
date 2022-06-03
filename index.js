let dumbFunction = () => {
  console.log("Hello world!");
  alert("This is JavaScript!");

  // var name = 'Vlad';
  // let name = 'Vlad';
  // const name = 'Vlad';

  //Primitive types
  let stringType = "orice valoare cu litere sau numere in ghilimele";
  let value = "24";
  let numberType = 24;
  let booleanType = true;
  // let undfType = undefined;
  // let undfType;
  let nullType = null;

  console.log(typeof numberType);
  console.log(typeof stringType);
  console.log(typeof booleanType);

  // let price = 15;
  // document.body.innerHTML = price;
  // console.log(price);

  // let name = 'Vlad';
  // let surname = 'Avram'
  // let age = 24;

  // let number = 0;
  // console.log(number);
  // number = 4;
  // console.log(number);

  // let number = 0;
  // console.log(number);
  // number = 4;

  // let displayName = ' My name is ' + name + ' ' + surname;
  // document.body.innerHTML = displayName;

  // console.log(`My name is ${name} ${surname} and i'm ${age} years old`);

  // const booleanType = true;

  // console.log(typeof true);

  // let numberType = -43232;

  // console.log(5 % 2)

  // console.log(`The sum of ${firstNumber} and ${secondNumber} = ${sum}`)

  //Functions

  //Arrow function
  // let testFunction = () => {
  //     console.log('Hello from function')
  // }
};

// dumbFunction()
// testFunction();

// console.log(typeof addTwoNumbers);

// console.log(2344 + 23)

// alert('hello world')
// const firstNumber = prompt('Please add the first number');
// const secondNumber = prompt('Please add the second number');

// let addTwoNumbers = (firstNumberParams, secondNumberParams) => {
//     let sum = firstNumberParams + secondNumberParams;

//     console.log(`The sum of ${firstNumberParams} and ${secondNumberParams} is ${sum}`);
//     console.log('in add two numbers')
// }

// addTwoNumbers(firstNumber, secondNumber);

// const addTwoNumbers = () => {
//     event.preventDefault();
//     const firstNumber = parseInt(document.getElementById('first-number').value);
//     const secondNumber = parseInt(document.getElementById('second-number').value);
// const result = document.getElementById('result');
//     let sum = firstNumber + secondNumber;
//     console.log(firstNumber);
//     console.log(secondNumber);
//     console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}`)
//     result.innerText = sum;
// }

// let greetPerson = (personParams) => {
//     console.log(`Hello, ${personParams.name}`)
// }

let person = {
  name: "34",
  age: 24,
  address: "Cluj",
  sayHello: () => {
    console.log("Hello");
  },
  object: {
    alterName: "sdsj",
  },
};

// let firstNumber = 10;
// let secondNumber = 10;

// let equalNumbers = (firstNumberParams, secondNumberParams) => {
//     console.log(`numerele ${firstNumberParams} si ${secondNumberParams} sunt egale`)
// }

// let notEqualNumbers = (firstNumberParams, secondNumberParams) => {
//     console.log(`numerele ${firstNumberParams} si ${secondNumberParams} nu sunt egale`)
// }

// if(firstNumber === secondNumber) {
//     equalNumbers(firstNumber, secondNumber);
// } else {
//     notEqualNumbers(firstNumber, secondNumber);
// }

// console.log(person);

// let personLocation = {
//     name: 'Vlad',
//     address: 'Cluj Napoca',
//     raining: false,
//     sayHello: () => {
//         console.log('hello, from object');
//     }
// }

// let sayHello = () => {
//     console.log('hello');
// }

// let checkRain = (personLocationParams) => {

//     if(personLocationParams.raining) {
//         console.log('ia o geaca')
//     } else {
//         console.log('e ok ia ochelari')
//     }

// }

// checkRain(personLocation);

let weatherData = {
    coord: {
      lon: -0.1257,
      lat: 51.5085
    },
    weather: [
      {
        id: 804,
        main: "Clouds",
        description: "overcast clouds",
        icon: "04d"
      }
    ],
    base: "stations",
    main: {
      temp: 65.01,
      feelslike: 63.61,
      tempmin: 62.56,
      temp_max: 67.05,
      pressure: 1019,
      humidity: 51
    },
    visibility: 10000,
    wind: {
      speed: 13.8,
      deg: 100
    },
    clouds: {
      all: 96
    },
    dt: 1654192731,
    sys: {
      type: 2,
      id: 2019646,
      country: "GB",
      sunrise: 1654141709,
      sunset: 1654200527
    },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200
  }

// document.body.innerHTML =`The weather in ${weatherData.name} is ${weatherData.main.temp}`

let personLocation = {
  name: "Vlad",
  address: "Cluj Napoca",
  raining: false,
  sayHello: () => {
    console.log("hello, from object");
  },
};

console.log(personLocation.name);

let stringType = "orice valoare cu litere sau numere in ghilimele";
let value = "24";
let numberType = 24;
let booleanType = true;

let testArray = [weatherData, personLocation];
console.log(testArray[0]);
