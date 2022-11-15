import { useState } from 'react';
import quotes from '../components/Random_quotes';

const Quotes = () => {
  const [quote, setQuote] = useState(quotes[quotes.length - 1]);
  const handleClick = () => {
    setQuote((prevState) => {
      let newState = quotes[0];
      if (prevState.id !== quotes.length) {
        newState = quotes[prevState.id];
        return newState;
      }
      return newState;
    });
  };

  return (
    <section className="quote-section flex jc-c ai-c">
      <div className="quote-container" data-testid="quote container">
        <p className="quote" data-testid="quote">
          &quot;
          {quote.text}
          &quot;
        </p>
        <p className="author">{quote.author}</p>
        <button type="button" className="quote-btn" onClick={handleClick}>
          Random quote
        </button>
      </div>
    </section>
  );
};

export default Quotes;
