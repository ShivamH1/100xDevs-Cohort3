import { atomFamily, selectorFamily } from "recoil";
import axios from "axios";
// This code creates a Recoil atomFamily named 'todosAtomFamily'. An atomFamily is a way to create a family of atoms.
// An atom is a piece of state that can be read and written to.
// An atomFamily is a function that takes an id as a parameter and returns an atom.
// The 'key' property is a unique string that identifies the atomFamily.
// The 'default' property is a function that takes an id as a parameter and returns the default value of the atom.
// In this case, the default value is a selector function named 'todoSelectorFamily'.
// The selector function is created using 'selectorFamily', which is a way to create a family of selectors.
// A selector is a function that takes an id as a parameter and returns a value.
// A selectorFamily is a function that takes an id as a parameter and returns a selector.
// The 'get' callback function of the selector function is an async function that makes a GET request to the API to fetch
// the todo with the matching 'id'.
// It uses the axios library to make the request and returns the result.
// The 'get' function uses the 'get' function of Recoil to access other atoms.
// The 'get' function is used to access the 'todosAtomFamily' atom, which is used to get the todo with the matching 'id'.
// The 'todosAtomFamily' atom is used to get the todo with the matching 'id'.
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: selectorFamily({
    key: "todoSelectorFamily",
    get: (id) => async ({get}) => {
      // The 'get' callback function of the selector function is an async function that makes a GET request to the API to fetch
      // the todo with the matching 'id'.
      // It uses the axios library to make the request and returns the result.
      await new Promise(r => setTimeout(r, 5000));
      const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
      // The todo with the matching 'id' is returned as the default value of the atom.
      return res.data.todo;
    },
  })
});
