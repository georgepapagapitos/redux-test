import React, { useEffect } from 'react';
import AddNoteForm from './components/AddNoteForm';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';
import { initializeNotes } from './reducers/noteReducer';
import { useDispatch } from 'react-redux';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeNotes());
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