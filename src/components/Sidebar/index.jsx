import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <Link to="/props">Learn props</Link>
      </li>
      <li>
        <Link to="/state">Learn state</Link>
      </li>
      <li>
        <Link to="/effect">Learn use effect</Link>
      </li>
      <li>
        <Link to="/reducer">Learn use reducer</Link>
      </li>
      <li>
        <Link to="/tictactoe">Tic Tac Toe</Link>
      </li>
    </ul>
  );
};

export default Sidebar;
