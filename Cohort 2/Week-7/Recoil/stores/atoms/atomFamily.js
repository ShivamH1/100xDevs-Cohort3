import { atomFamily } from "recoil";
import { TODOS } from "../../src/assets/todos";
// This is a Recoil atomFamily, which is a way to create a family of atoms.
// An atomFamily is a function that takes an id as a parameter and returns an atom.
// In this case, the atomFamily is called 'todosAtomFamily'.
// The 'key' property is a unique string that identifies the atomFamily.
// The 'default' property is a function that takes an id as a parameter and returns the default value of the atom.
// The default value is a selector function that uses the 'id' parameter to find the corresponding todo in the 'TODOS' array.
// The selector function returns the todo with the matching 'id'.
// The todo that is returned is used as the default value of the atom.
// The atom is then used in the app to get the todo with the matching 'id'.
export const todosAtomFamily = atomFamily({
  // Unique string that identifies the atomFamily
  key: 'todosAtomFamily',
  // Function that takes an id as a parameter and returns the default value of the atom
  default: id => {
    // Selector function that uses the 'id' parameter to find the corresponding todo in the 'TODOS' array
    // The selector function returns the todo with the matching 'id'
    return TODOS.find(x => x.id === id)
  },
});
