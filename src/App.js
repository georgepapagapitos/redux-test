import React from 'react';
import AddNoteForm from './components/AddNoteForm';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';

const App = () => {
  return (
    <div>
      <AddNoteForm />
      <VisibilityFilter />
      <Notes />
    </div>
  );
}

export default App;