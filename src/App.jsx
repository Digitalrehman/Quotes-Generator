import React, { useState } from "react";
import { IoReloadOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { BiSolidQuoteRight } from "react-icons/bi";
import "./App.css";
const App = () => {
  let Quotes = [];
  async function LoadQuotes() {
    let response = await fetch("https://type.fit/api/quotes");
    Quotes = await response.json();
  }
  let [quote, setQuote] = useState({
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  });
  function rendom() {
    const Select = Quotes[Math.floor(Math.random() * Quotes.length)];
    setQuote(Select);
  }
  const twitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author.split(" ")[0]}`
    );
  };
  LoadQuotes();
  return (
    <>
      <h1>Quotes Generate</h1>
      <div className="QuotesBox">
        <div className="Qoutes">
          <BiSolidQuoteLeft className="quotes" /> {quote.text}
          <BiSolidQuoteRight className="quotes" />
        </div>

        <div className="line"></div>
        <div className="QuotesBottom">
          <div className="author">
            <h5>{quote.author.split(" ")[0]}</h5>
          </div>
          <div className="icons">
            <IoReloadOutline
              className="icon"
              onClick={() => {
                rendom();
              }}
            />
            <FaXTwitter
              onClick={() => {
                twitter();
              }}
              className="icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
