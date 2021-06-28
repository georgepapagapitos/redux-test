import React from 'react';
import AddNoteForm from './components/AddNoteForm';
import Notes from './components/Notes';

const App = () => {

  return (
    <div>
      <AddNoteForm />
      <Notes />
    </div>
  );
}

export default App;