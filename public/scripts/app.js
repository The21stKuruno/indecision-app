'use strict';

var appRoot = document.getElementById('app');

var listNote = {
  note: []
};

var showIt = function showIt() {
  var putNote = 'Wiwoo! What\'s Poppin?';
  listNote.note.push(putNote);
  console.log(listNote.note);
  render();
};

var hideIt = function hideIt() {
  listNote.note = [];
  console.log(listNote.note);
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    listNote.note.length > 0 ? React.createElement(
      'button',
      { onClick: hideIt },
      'Hide Note'
    ) : React.createElement(
      'button',
      { onClick: showIt },
      'Show Note'
    ),
    listNote.note && React.createElement(
      'p',
      null,
      listNote.note
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
