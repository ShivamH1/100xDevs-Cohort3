import React, { useState } from 'react'

// This is a functional component that renders a search bar and a list of items that match the search term.
// The component takes in an object with an array of items.
// The component uses the useState hook to create a state variable called searchTerm, which is initialized to an empty string.
// The component uses the useState hook to create a function called setSearchTerm, which updates the value of searchTerm.
// The component creates a filteredItems variable by filtering the items array based on the value of searchTerm.
// The component creates a function called handleSearchChange, which updates the value of searchTerm when the input field changes.
// The component renders a div that contains an input field and a list.
// The input field is bound to the searchTerm state variable and has a placeholder value of "Search".
// The list is populated by mapping over the filteredItems array and rendering a li element for each item.
// The li element displays the item and is given a unique key based on its index in the array.
export default function Fifteen({ items }) {
    // Create a state variable called searchTerm and a function to update it called setSearchTerm
    const [searchTerm, setSearchTerm] = useState('');

    // Create a filteredItems variable by filtering the items array based on the value of searchTerm
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Create a function called handleSearchChange, which updates the value of searchTerm when the input field changes
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Render a div that contains an input field and a list
    return (
        <div>
            {/* Render an input field that is bound to the searchTerm state variable and has a placeholder value of "Search" */}
            <input
                type='text'
                placeholder='Search'
                value={searchTerm} // Display the current value of searchTerm in the input field
                onChange={handleSearchChange} // Call the handleSearchChange function when the input field changes
            />

            {/* Render a list that is populated by mapping over the filteredItems array */}
            <ul>
                {/* Map over the filteredItems array and render a li element for each item */}
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
