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

export const createNote = (data) => {
  return {
    type: 'NEW_NOTE',
    data
  }
}

export const initializeNotes = (notes) => {
  return {
    type: 'INIT_NOTES',
    payload: notes
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