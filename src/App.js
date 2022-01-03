import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import AddTodo from './pages/AddTodo';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-todo" element={<AddTodo />} />
    </Routes>
  </Router>
);

export default App;
