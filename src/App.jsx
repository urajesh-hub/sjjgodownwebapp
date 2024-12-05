import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReadGodown from "./components/ReadGodown";
import EditGodown from "./components/EditGodown";
import { QrCode } from "./components/QrCode";
import NavBar from "./components/NavBar";

const App = () => {
  const [godownData, setGodownData] = useState(null);

  useEffect(() => {
    // Check if data exists in localStorage
    const storedData = localStorage.getItem("godownData");
    if (storedData) {
      setGodownData(JSON.parse(storedData));
    } else {
      // Fetch the JSON data from the public folder if not found in localStorage
      fetch("/godownData.json")
        .then((response) => response.json())
        .then((data) => {
          setGodownData(data);
          localStorage.setItem("godownData", JSON.stringify(data)); // Save initial data to localStorage
        })
        .catch((error) => {
          console.error("Error fetching the godown data:", error);
        });
    }
  }, []);

  // Show a loading message while data is being fetched
  if (!godownData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<ReadGodown godownData={godownData} />} />
        <Route
          path="/form"
          element={
            <EditGodown
              godownData={godownData}
              setGodownData={(updatedData) => {
                setGodownData(updatedData);
                localStorage.setItem("godownData", JSON.stringify(updatedData)); // Update localStorage
              }}
            />
          }
        />
        <Route path="/QrCode" element={<QrCode />} />
        <Route path="/edit" element={<NavBar />} />
      </Routes>
    </div>
  );
};

export default App;
