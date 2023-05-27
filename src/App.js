import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import LearnProps from "./pages/LearnProps";
import LearnUseEffect from "./pages/LearnUseEffect";
import LearnUseReducer from "./pages/LearnUseReducer";
import LearnUseState from "./pages/LearnUseState";
import TicTacToe from "./pages/TicTacToe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="d-flex">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/props" element={<LearnProps />} />
              <Route path="/state" element={<LearnUseState />} />
              <Route path="/effect" element={<LearnUseEffect />} />
              <Route path="/reducer" element={<LearnUseReducer />} />
              <Route path="/tictactoe" element={<TicTacToe />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
