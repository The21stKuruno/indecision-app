
const appRoot = document.getElementById('app');

const listNote = {
  note: []
};

const showIt = () => {
  const putNote = 'Wiwoo! What\'s Poppin?';
  listNote.note.push(putNote);
  console.log(listNote.note);
  render();
};

const hideIt = () => {
  listNote.note = [];
  console.log(listNote.note);
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      {listNote.note.length > 0 ? <button onClick={hideIt}>Hide Note</button> : <button onClick={showIt}>Show Note</button>}
      {listNote.note && <p>{listNote.note}</p>}
    </div>
  );
  ReactDOM.render(template, appRoot)
};

render();
