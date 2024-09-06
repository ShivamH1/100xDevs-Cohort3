// Importing the necessary components from 'recoil'
import { atom, selector } from 'recoil';

// Creating an atom to store the count value
// The atom is named 'countAtom', and it has a default value of 0
export const countAtom = atom({
    key: 'countAtom', // Unique key for the atom
    default: 0, // Default value of the atom
});

// Creating a selector to determine if the count is even
// The selector is named 'evenSelector', and it depends on the 'countAtom'
export const evenSelector = selector({
    key: 'evenSelector', // Unique key for the selector
    // get callback function that returns whether the count is even or odd
    get: ({ get }) => {
        // Getting the current value of the 'countAtom'
        const count = get(countAtom);
        // Checking if the count is even or odd
        return count % 2 === 0; // Returns true if the count is even, false otherwise
    },
});

//selector is an alternative to useMemo
// useMemo(() => {

// },[countAtom]);
