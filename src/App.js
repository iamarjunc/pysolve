// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Introduction from './contents/introduction';
import Variables from './contents/variables';
import Datatype from './contents/datatypes';
import Typecasting from './contents/typecasting';
import Strings from './contents/strings';
import Boolean from './contents/boolean';
import Operators from './contents/operators';
import ConditionalStatements from './contents/conditionstatement';
import Loops from './contents/loop';
import PythonLists from './contents/list';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Sidebar />
          <Routes>
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/variables" element={<Variables />} />
            <Route path="/data-types" element={<Datatype />} />
            <Route path="/type-casting" element={<Typecasting />} />
            <Route path="/strings" element={<Strings />} />
            <Route path="/boolean" element={<Boolean />} />
            <Route path="/operators" element={<Operators />} />
            <Route path="/conditionstatement" element={<ConditionalStatements />} />
            <Route path="/loop" element={<Loops />} />
            <Route path="/pythonlists" element={<PythonLists />} />
          </Routes>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
