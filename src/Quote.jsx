import React, { useEffect, useState } from "react";
import "./Quote.css";

const Quote = () => {
  const [count, setCount] = useState(0);

  const data = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "Do something today that your future self will thank you for.",
    "Dream big and dare to fail.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t watch the clock; do what it does. Keep going.",
  ];

  // Show first quote when app loads
  useEffect(() => {
    setCount(0);
  }, []);

  const showNewQuote = () => {
    setCount((prev) => (prev + 1) % data.length); // move to next quote, loop back
  };

  return (
    <div className="container">
      <div className="quote-card">
        <p className="quote-text">“{data[count]}”</p>
        <p className="quote-count">
          Quote {count + 1} of {data.length}
        </p>
        <button onClick={showNewQuote} className="quote-button">
          Show New Quote
        </button>
      </div>
    </div>
  );
};

export default Quote;
