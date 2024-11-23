import React from 'react'

export default function QuoteOfTheDay() {
  const quotes = [
    'The only way to do great work is to love what you do. - Steve Jobs',
    'Believe you can and you\'re halfway there. - Theodore Roosevelt',
    'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
    'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
    'Do not go where the path may lead, go instead where there is no path and leave a trail. - Robert Frost',
    'You miss 100% of the shots you don\'t take. - Wayne Gretzky',
    'The greatest glory in living lies not in never falling, but in rising every time we fall. - Winston Churchill',
    'The way to get started is to quit talking and begin doing. - Walt Disney',
    'I have not failed. I\'ve just found 10,000 ways that won\'t work. - Thomas Edison',
    'In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.',
    'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
    'It does not do to dwell on dreams and forget to live. - Robert Burns',
    'The best way out is always through. - Theodore Roosevelt',
    'The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Dwight D. Eisenhower',
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div>
      <p>{randomQuote}</p>
      <button onClick={() => window.location.reload()}>Get a new quote</button>
    </div>
  );
}
