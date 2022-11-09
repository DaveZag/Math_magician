import { useState } from 'react';
import quotes from '../components/Random_quotes';

const Quotes = () => {
  const [quote, setQuote] = useState(quotes[quotes.length - 1]);
  const handleClick = () => {
    // get random item index
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex);

    // get random item
    const randomElement = quotes[randomIndex];
    setQuote((prevState) => {
      let newState;
      console.log('previous state: ', prevState.id);
      console.log('Incomming element', randomElement.id);
      if (prevState !== randomElement) {
        newState = randomElement;
        return newState;
      }
      return quotes[randomIndex - 1];
    });
  };

  return (
    <section className="quote-section flex jc-c ai-c">
      <div className="quote-container">
        <p className="quote">
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
