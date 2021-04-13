import React from "react";
import "./App.css";
import BusinessList from "../BusinessList";
import SearchBar from "../SearchBar";

function App() {
  return (
    <div className="App">
      <h1>YYC Food Finder</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
