import "./App.css";
import React from "react";

function App() {
  // TODO: answer here
  return (
    <div>
      <RandomEmoji />
    </div>
  );
}

function RandomEmoji() {
  // TODO: answer here
  const [emoji, setEmoji] = React.useState();
  return (
    <div className="wrapper">
      <h1 className="emoji" data-testid="emoji">
        {emoji}
      </h1>
      <button onClick={() => setEmoji(randomEmoji())} className="button">
        Acak emoji
      </button>
    </div>
  );
}

export function randomEmoji() {
  const emojis = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "😗",
    "😙",
    "😚",
    "🙂",
    "🤗",
    "🤩",
    "🤔",
    "🤨",
    "😐",
    "😑",
    "😶",
    "🙄",
    "😏",
    "😣",
    "😥",
    "😮",
    "🤐",
    "😯",
    "😪",
    "😫",
    "😴",
    "😌",
    "😛",
    "😜",
    "😝",
    "🤤",
    "😒",
    "😓",
    "😔",
    "😕",
    "🙃",
    "🤑",
    "😲",
    "☹",
    "🙁",
    "😖",
    "😞",
    "😟",
    "😤",
    "😢",
    "😭",
    "😦",
    "😧",
    "😨",
    "😩",
    "🤯",
    "😬",
    "😰",
    "😱",
    "😳",
    "🤪",
    "😵",
    "😡",
    "😠",
    "🤬",
    "😷",
    "🤒",
    "🤕",
    "🤢",
    "🤮",
    "🤧",
    "😇",
    "🤠",
    "🤡",
    "🥳",
    "🥴",
    "🥺",
    "🤥",
    "🤫",
    "🤭",
    "🧐",
    "🤓",
    "😈",
    "👿",
    "👹",
    "👺",
    "💀",
    "👻",
    "👽",
    "🤖",
    "💩",
    "😺",
    "😸",
    "😹",
    "😻",
    "😼",
    "😽",
    "🙀",
    "😿",
    "😾",
  ];
  // TODO: answer here
  let i = Math.floor(Math.random() * 103);
  return `${emojis[i]}`;
}

export default App;
