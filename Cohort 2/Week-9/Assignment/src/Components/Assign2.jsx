// Importing the useState hook from the React library
import { useState } from 'react';

// Defining a functional component called BackgroundChanger
export function BackgroundChanger() {

  // Defining an object called backgroundColors which maps color names to their corresponding CSS classes
  const backgroundColors = {
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    black: 'bg-black',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    white: 'bg-white'
  };

  // Defining a state variable called currentBackgroundColor and a function called setCurrentBackgroundColor using the useState hook
  // The initial value of currentBackgroundColor is set to 'white'
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState('white');

  // Defining a function called handleBackgroundColorChange which takes a backgroundColor parameter and sets the currentBackgroundColor state variable to that value
  const handleBackgroundColorChange = (backgroundColor) => {
    setCurrentBackgroundColor(backgroundColor);
  };

  // Returning a JSX fragment that represents the UI of the BackgroundChanger component
  return (
    // The root div has a class name that is dynamically generated based on the value of currentBackgroundColor
    // The class name is constructed by concatenating the string 'min-h-screen flex flex-col items-center justify-center' with the corresponding CSS class from the backgroundColors object
    <div className={`min-h-screen flex flex-col items-center justify-center ${backgroundColors[currentBackgroundColor]}`}>
      {/* A heading element displaying the text "Background Changer" */}
      <h1 className="text-2xl font-bold mb-4">Background Changer</h1>
      {/* A div element containing a row of buttons */}
      <div className="flex space-x-2">
        {/* Using the map function to iterate over the keys of the backgroundColors object */}
        {Object.keys(backgroundColors).map((backgroundColor) => (
          // For each key, rendering a button element
          <button
            // The key attribute is set to the current backgroundColor
            key={backgroundColor}
            // The onClick attribute is set to a function that calls the handleBackgroundColorChange function with the current backgroundColor as the argument
            onClick={() => handleBackgroundColorChange(backgroundColor)}
            // The className attribute is set to a string that concatenates the CSS classes for the button's styling, including the corresponding CSS class from the backgroundColors object
            className={`px-4 py-2 rounded-full shadow-md ${backgroundColors[backgroundColor]} text-white`}
          >
            {/* Displaying the capitalized version of the current backgroundColor */}
            {capitalize(backgroundColor)}
          </button>
        ))}
      </div>
    </div>
  );
}

// Defining a helper function called capitalize that takes a string as a parameter and returns the same string with the first character capitalized
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}