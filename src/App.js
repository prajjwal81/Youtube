import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Feed from "./Components/Feed";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000", height: "1000vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/search/:searchTerm" exact element={<Feed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
