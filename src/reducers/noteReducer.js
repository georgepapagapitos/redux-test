import { createNew, getAll } from "../services/notes";

const noteReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW_NOTE':
      return [...state, action.payload];
    case 'INIT_NOTES':
      return action.payload;
    case 'TOGGLE_IMPORTANCE': {
      const id = action.payload.id;
      const noteToChange = state.find(n => n.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important
      }
      return state.map(note => note.id !== id ? note : changedNote);
    }
    default:
      return state;
  }
}

export const createNote = (content) => {
  return async dispatch => {
    const newNote = await createNew(content);
    dispatch({
      type: 'NEW_NOTE',
      payload: newNote
    });
  }
}

export const initializeNotes = () => {
  return async dispatch => {
    const notes = await getAll();
    dispatch({
      type: 'INIT_NOTES',
      payload: notes
    });
  }
}

export const toggleImportanceOf = (id) => {
  console.log(id, 'id')
  return {
    type: 'TOGGLE_IMPORTANCE',
    payload: { id }
  }
}

export default noteReducer;