import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // To get the current route
  const [activePath, setActivePath] = useState(location.pathname); // Set initial active path

  // Handle active class toggle 
  const handleLinkClick = (path) => {
    setActivePath(path);
  };

  return (
    <div className="sidebar">
      <h4>Important Topics</h4>
      <div className={`box ${activePath === '/introduction' ? 'active' : ''}`}>
        <Link to="/introduction" onClick={() => handleLinkClick('/introduction')}>Introduction</Link>
      </div>
      <div className={`box ${activePath === '/variables' ? 'active' : ''}`}>
        <Link to="/variables" onClick={() => handleLinkClick('/variables')}>Variables</Link>
      </div>
      <div className={`box ${activePath === '/data-types' ? 'active' : ''}`}>
        <Link to="/data-types" onClick={() => handleLinkClick('/data-types')}>Data Types</Link>
      </div>
      <div className={`box ${activePath === '/type-casting' ? 'active' : ''}`}>
        <Link to="/type-casting" onClick={() => handleLinkClick('/type-casting')}>Type Casting</Link>
      </div>
      <div className={`box ${activePath === '/strings' ? 'active' : ''}`}>
        <Link to="/strings" onClick={() => handleLinkClick('/strings')}>Strings</Link>
      </div>
      <div className={`box ${activePath === '/boolean' ? 'active' : ''}`}>
        <Link to="/boolean" onClick={() => handleLinkClick('/boolean')}>Boolean</Link>
      </div>
      <div className={`box ${activePath === '/operators' ? 'active' : ''}`}>
        <Link to="/operators" onClick={() => handleLinkClick('/operators')}>Operators</Link>
      </div>
      <div className={`box ${activePath === '/conditionstatement' ? 'active' : ''}`}>
        <Link to="/conditionstatement" onClick={() => handleLinkClick('/conditionstatement')}>Condition Statement</Link>
      </div>
      <div className={`box ${activePath === '/loop' ? 'active' : ''}`}>
        <Link to="/loop" onClick={() => handleLinkClick('/loop')}>Loops</Link>
      </div>
      <div className={`box ${activePath === '/pythonlists' ? 'active' : ''}`}>
        <Link to="/pythonlists" onClick={() => handleLinkClick('/pythonlists')}>List</Link>
      </div>
    </div>
  );
};

export default Sidebar;
