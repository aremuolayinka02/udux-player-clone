import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import GlobalFonts from "./utils/fonts";

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <GlobalFonts />
    </div>
  );
}

export default App;
