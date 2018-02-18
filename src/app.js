console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hand of computer',
  options: ['One', 'Two']
};

// JSX -JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

// const user = {
//   name: 'Cris',
//   age: 24,
//   location: 'Daejeon, South Korea'
// };
//
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>
//   }
// }
//
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

let count = 0;

const addOne = () => {
  console.log('addOne');
};

const minusOne = () => {
  console.log('minusOne');
};

const reset = () => {
  console.log('reset');
};

const templateTwo = (
  <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
  </div>
);



const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
