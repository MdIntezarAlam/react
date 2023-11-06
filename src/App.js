import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [dataFromReactNative, setDataFromReactNative] = useState("");

  const handleButtonClick = () => {
    alert(`Data from React Native: ${dataFromReactNative}`);
    console.log(dataFromReactNative);
  };

  useEffect(() => {
    const data = window.dataFromReactNative;
    console.log("Data retrieved from React Native:", data);
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
            color: "#fff",
            width: "50%",
            padding: "20px",
            borderRadius: "10px",
          }}
          onClick={handleButtonClick}
        >
          Fetch data from react-native-cli
        </button>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          e Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
          Cicero, written in 45 BC. amet...'
        </div>
      </div>
    </div>
  );
}

export default App;
