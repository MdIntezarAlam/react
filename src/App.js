import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const handleButtonClick = () => {
    window.addEventListener("message", (message) => {
      console.log(message.data);
      window.ReactNativeWebView.postMessage("Client received data");
    });
  };

  return (
    <div className="App">
      <div className="container">
        <button
          style={{
            backgroundColor: "orange",
            color: "#000",
            width: "100%",
            padding: "20px",
            borderRadius: "10px",
          }}
          onClick={handleButtonClick}
        >
          Fetch react-native data
        </button>
      </div>
    </div>
  );
}

export default App;
