import "./App.css";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import context from "./context";
import Search from "./Search";
import Movies from "./Movies";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
