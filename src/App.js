import React, { useEffect } from 'react';
import AddNoteForm from './components/AddNoteForm';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';
import { getAll } from './services/notes';
import { initializeNotes } from './reducers/noteReducer';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    getAll()
      .then(notes => dispatch(initializeNotes(notes)));
  }, [dispatch]);
  return (
    <div>
      <AddNoteForm />
      <VisibilityFilter />
      <Notes />
    </div>
  );
}

export default App;