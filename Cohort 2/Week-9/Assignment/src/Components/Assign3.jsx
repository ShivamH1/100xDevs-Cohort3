import React, { useState } from "react";

export function Assign3() {
  const [paragraphLength, setParagraphLength] = useState('');
  const [generatedParagraph, setGeneratedParagraph] = useState('');

  const generateParagraph = () => {
    const words = [
      'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 
      'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 
      'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 
      'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea', 
      'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'in', 'reprehenderit', 
      'in', 'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla', 
      'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident', 
      'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 
      'est', 'laborum'
    ];

    let paragraph = '';
    for (let i = 0; i < paragraphLength; i++) {
      const randomIndex = Math.floor(Math.random() * words.length);
      paragraph += words[randomIndex] + ' ';
    }

    setGeneratedParagraph(paragraph.trim());
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Paragraph Generator</h1>
      <input 
        type="number" 
        value={paragraphLength} 
        onChange={(e) => setParagraphLength(e.target.value)} 
        className="px-4 py-2 border rounded mb-4"
        placeholder="Enter number of words"
      />
      <button 
        onClick={generateParagraph} 
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
        Generate Paragraph
      </button>
      <div className="mt-4 p-4 border rounded bg-white shadow">
        {generatedParagraph}
      </div>
    </div>
  );
}

