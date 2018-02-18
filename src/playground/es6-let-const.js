// var nameVar = 'Andrew';
// nameVar = 'Mike'
// console.log('nameVar', nameVar);
//
// let nameLet = 'Jen';
// nameLet = 'Julie';
// console.log('nameLet', nameLet);
//
// const nameConst = 'Frank';
// // nameConst = 'Ben';
// console.log('nameConst', nameConst);
//

// const fullName = 'Jen Mead';
// let firstName;
//
// if (fullName) {
//   firstName = fullName.split(' ')[0];
//   console.log(firstName);
// }
//
// console.log(firstName);

const getName = function (fullName) {
  const firstName = fullName.split(' ')[0];
  return firstName;
}
console.log(getName('Jen Mead'));

// long term for arrow function

const nameArrow = (fullName) => {
  return fullName.split(' ')[0];
}

console.log(nameArrow('Mike Smith'));

// short term for arrow function

const nameArrowLong = (fullName) => fullName.split(' ')[0];

console.log(nameArrowLong('Mike Smith'));
