import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [dataFromReactNative, setDataFromReactNative] = useState("");

  const handleButtonClick = () => {
    alert(`Data from React Native: ${dataFromReactNative}`);
  };

  useEffect(() => {
    const data = window.dataFromReactNative;
    if (data) {
      setDataFromReactNative(data);
    }
  }, []);
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
          Fetch data
        </button>
        <div style={{ color: "#fff" }}>data:{dataFromReactNative}</div>
      </div>
    </div>
  );
}

export default App;
