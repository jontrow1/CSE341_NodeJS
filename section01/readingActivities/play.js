/*
const name = 'Jon';
let age = 35;
const hasHobbie = true;

age = 36;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby);
}

//const add = (a,b) => a + b;
//const addOne = a => a + 1; // with only one argument, no need for parenthesies
const addRandom = () => 1 + 2; // with no arguments, parenthesies are required

//console.log(add(1, 2));
//console.log(addOne(1));
console.log(addRandom());
console.log(summarizeUser(name, age, hasHobbie));
*/

/*
const person = {
    name: 'Jon',
    age: 36,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

const printName = ({name}) => { //Destructuring an object
    console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name, age);

// const copiedPerson = {...person}; //Spread copies an array or object
// console.log(copiedPerson);

// //person.greet();

const hobbies = ['Gaming', 'Family', 'Golfing'];
const [hobby1, hobby2] = hobbies; // Destructuring an array
console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// // console.log(hobbies);
// // hobbies.push('Programming');
// // console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => { //Rest used to add things into an array or object
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));
*/

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;    
};

//Asynchronist code because it is not immediate
setTimeout(() => {
    console.log('Timer is done!');
    fetchData().then(text => {
        console.log(text);
        return fetchData()
    })
    .then(text2 => {
        console.log(text2);
    });
}, 2000);

//Synchronist code because it does it immediately
console.log('Hello!');
console.log('Hi!');