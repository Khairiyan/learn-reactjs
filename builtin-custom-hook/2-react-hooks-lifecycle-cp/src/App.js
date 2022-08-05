import React, { useEffect } from "react";

export default function App() {
  return <RandomQuote />;
}

export function RandomQuote() {
  // TODO: answer here
  const [quote, setQuote] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    // TODO: answer here
    getQuote();
  }, []);

  function getQuote() {
    setLoading(true);
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setQuote(data.content))
      .finally(() => setLoading(false));
  }

  // TODO: answer here
  return (
    <div data-testid={"quote"}>
      <h1>Random Quote</h1>
      <p>{loading ? "Loading..." : quote}</p>
      <button onClick={() => setQuote(getQuote())}>Get another quote</button>
    </div>
  );
}
