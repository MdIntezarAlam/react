import React from "react";

const App = () => {
  const receiveDataFromWebView = () => {
    const data = "Data from React JS to React Native";
    window.ReactNativeWebView.postMessage(data);
  };

  return (
    <div className="App">
      <h1>Fetch data from react-native</h1>
      <button
        style={{
          width: "100px",
          color: "#000",
          padding: "20px",
          borderRadius: "10px",
        }}
        onClick={receiveDataFromWebView}
      >
        Fetch
      </button>
    </div>
  );
};

export default App;
