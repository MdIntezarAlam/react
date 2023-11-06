import React, { useEffect, useState } from "react";

function App() {
  const [receivedData, setReceivedData] = useState("");

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data) {
        try {
          const message = JSON.parse(event.data);
          setReceivedData(message.data);
        } catch (error) {
          console.error("Error parsing JSON:", error);
        }
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Access React Native Data in WebView</h1>
      <p>Data from React Native: {receivedData}</p>
    </div>
  );
}

export default App;
