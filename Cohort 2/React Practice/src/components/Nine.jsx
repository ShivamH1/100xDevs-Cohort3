import React, { useState } from "react";

export default function Nine() {
    // State to store the background color
    const [backgroundColor, setBackgroundColor] = useState('white');

    // Function to handle the click event and change the background color
    const handleClick = () => {
        // Toggle between white and black background color
        const newColor = backgroundColor === 'white' ? 'black' : 'white';
        setBackgroundColor(newColor);
    };

    // Render a <div> element that changes background color on click
    return (
        <div
            onClick={handleClick}
            style={{
                backgroundColor,
                cursor: "pointer",
            }}
        >
            Click me to change color
        </div>
    );
}
