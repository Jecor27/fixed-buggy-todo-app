import "../App.css";
import { useState } from "react";
// import randomLibrary from "randomLibrary";

export default function Main() {
  const [text, setText] = useState({ text: "Level 1 done" });

  // setText(""); this was running immediately and causing it to crash
  return (
    <div className="App">
      <h1>{text.text}</h1>
      {/* was trying to access multiple texts that didnt exist */}
      <h1>/-------------\</h1>
    </div>
  );
}
