console.log('person is running');

const isAdult = (age) => age >= 18;
const canDrink = (drink) => drink >= 21;
const isSenior = (age) => age >= 65;

export { isAdult, canDrink, isSenior as default };
