import React from "react";
import { AppProvider } from "./context/AppContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <Home />
    </AppProvider>
  );
};

export default App;
