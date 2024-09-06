import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // To get the current route
  const [activePath, setActivePath] = useState(location.pathname); // Set initial active path
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility
  const [activeNav, setActiveNav] = useState(() => {
    // Retrieve the last selected nav from localStorage
    return localStorage.getItem('activeNav') || 'python';
  });

  // Update the active path when the route changes
  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  // Update localStorage whenever activeNav changes
  useEffect(() => {
    localStorage.setItem('activeNav', activeNav);
  }, [activeNav]);

  // Handle sidebar toggle
  const handleSidebarToggle = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  // Handle active class toggle and close sidebar on link click
  const handleLinkClick = (path, nav) => {
    setActivePath(path);
    setIsSidebarVisible(false); // Close sidebar after link click
    setActiveNav(nav); // Set active navigation
  };
  // Render sidebar content based on the active navigation item
  const renderSidebarContent = () => {
    if (activeNav === 'python') {
      return (
        <>
          <h4>Python Topics</h4>
          {/* Python sidebar links */}
          <div className={`box ${activePath === '/introduction' ? 'active' : ''}`}>
            <Link to="/introduction" onClick={() => handleLinkClick('/introduction', 'python')}>Introduction</Link>
          </div>
          <div className={`box ${activePath === '/variables' ? 'active' : ''}`}>
            <Link to="/variables" onClick={() => handleLinkClick('/variables', 'python')}>Variables</Link>
          </div>
          <div className={`box ${activePath === '/data-types' ? 'active' : ''}`}>
          <Link to="/data-types" onClick={() => handleLinkClick('/data-types','python')}>Data Types</Link>
        </div>
        <div className={`box ${activePath === '/type-casting' ? 'active' : ''}`}>
          <Link to="/type-casting" onClick={() => handleLinkClick('/type-casting','python')}>Type Casting</Link>
        </div>
        <div className={`box ${activePath === '/strings' ? 'active' : ''}`}>
          <Link to="/strings" onClick={() => handleLinkClick('/strings','python')}>Strings</Link>
        </div>
        <div className={`box ${activePath === '/boolean' ? 'active' : ''}`}>
          <Link to="/boolean" onClick={() => handleLinkClick('/boolean','python')}>Boolean</Link>
        </div>
        <div className={`box ${activePath === '/operators' ? 'active' : ''}`}>
          <Link to="/operators" onClick={() => handleLinkClick('/operators','python')}>Operators</Link>
        </div>
        <div className={`box ${activePath === '/conditionstatement' ? 'active' : ''}`}>
          <Link to="/conditionstatement" onClick={() => handleLinkClick('/conditionstatement','python')}>Condition Statement</Link>
        </div>
        <div className={`box ${activePath === '/loop' ? 'active' : ''}`}>
          <Link to="/loop" onClick={() => handleLinkClick('/loop','python')}>Loops</Link>
        </div>
        <div className={`box ${activePath === '/pythonlists' ? 'active' : ''}`}>
          <Link to="/pythonlists" onClick={() => handleLinkClick('/pythonlists','python')}>List</Link>
        </div>
        <div className={`box ${activePath === '/pythontuples' ? 'active' : ''}`}>
          <Link to="/pythontuples" onClick={() => handleLinkClick('/pythontuples','python')}>Tuple</Link>
        </div>
        <div className={`box ${activePath === '/pythonsets' ? 'active' : ''}`}>
          <Link to="/pythonsets" onClick={() => handleLinkClick('/pythonsets','python')}>Set</Link>
        </div>
        <div className={`box ${activePath === '/pythondictionaries' ? 'active' : ''}`}>
          <Link to="/pythondictionaries" onClick={() => handleLinkClick('/pythondictionaries','python')}>Dictionary</Link>
        </div>
  <div className={`box ${activePath === '/functions' ? 'active' : ''}`}>
    <Link to="/functions" onClick={() => handleLinkClick('/functions','python')}>Functions</Link>
  </div>
  <div className={`box ${activePath === '/classes' ? 'active' : ''}`}>
    <Link to="/classes" onClick={() => handleLinkClick('/classes','python')}>Classes</Link>
  </div>
  <div className={`box ${activePath === '/inheritance' ? 'active' : ''}`}>
    <Link to="/inheritance" onClick={() => handleLinkClick('/inheritance','python')}>Inheritance</Link>
  </div>
  <div className={`box ${activePath === '/polymorphism' ? 'active' : ''}`}>
    <Link to="/polymorphism" onClick={() => handleLinkClick('/polymorphism','python')}>Polymorphism</Link>
  </div>
  <div className={`box ${activePath === '/scopes' ? 'active' : ''}`}>
    <Link to="/scopes" onClick={() => handleLinkClick('/scopes','python')}>Scopes</Link>
  </div>
  <div className={`box ${activePath === '/modules' ? 'active' : ''}`}>
    <Link to="/modules" onClick={() => handleLinkClick('/modules','python')}>Modules</Link>
  </div>
  <div className={`box ${activePath === '/exceptions' ? 'active' : ''}`}>
    <Link to="/exceptions" onClick={() => handleLinkClick('/exceptions','python')}>Exceptions</Link>
  </div>
  <div className={`box ${activePath === '/file-handling' ? 'active' : ''}`}>
    <Link to="/file-handling" onClick={() => handleLinkClick('/file-handling','python')}>File Handling</Link>
  </div>
  <div className={`box ${activePath === '/json' ? 'active' : ''}`}>
    <Link to="/json" onClick={() => handleLinkClick('/json','python')}>JSON</Link>
  </div>
  <div className={`box ${activePath === '/regular-expressions' ? 'active' : ''}`}>
    <Link to="/regular-expressions" onClick={() => handleLinkClick('/regular-expressions','python')}>Regular Expressions</Link>
  </div>
  <div className={`box ${activePath === '/generators' ? 'active' : ''}`}>
    <Link to="/generators" onClick={() => handleLinkClick('/generators','python')}>Generators</Link>
  </div>
  <div className={`box ${activePath === '/decorators' ? 'active' : ''}`}>
    <Link to="/decorators" onClick={() => handleLinkClick('/decorators','python')}>Decorators</Link>
  </div>
  <div className={`box ${activePath === '/lambda-functions' ? 'active' : ''}`}>
    <Link to="/lambda-functions" onClick={() => handleLinkClick('/lambda-functions','python')}>Lambda Functions</Link>
  </div>
  <div className={`box ${activePath === '/iterators' ? 'active' : ''}`}>
    <Link to="/iterators" onClick={() => handleLinkClick('/iterators','python')}>Iterators</Link>
  </div>
  <div className={`box ${activePath === '/context-managers' ? 'active' : ''}`}>
    <Link to="/context-managers" onClick={() => handleLinkClick('/context-managers','python')}>Context Managers</Link>
  </div>
          {/* Add more Python links here */}
        </>
      );
    } else if (activeNav === 'django') {
      return (
        <>
          <h4>Django Topics</h4>
          {/* Django sidebar links */}
          <div className={`box ${activePath === '/django-intro' ? 'active' : ''}`}>
            <Link to="/django-intro" onClick={() => handleLinkClick('/django-intro', 'django')}>Introduction</Link>
          </div>
          <div className={`box ${activePath === '/django-getstartred' ? 'active' : ''}`}>
            <Link to="/django-getstartred" onClick={() => handleLinkClick('/django-getstartred', 'django')}>Get Startred</Link>
          </div>
          {/* Add more Django links here */}
        </>
      );
    } else if (activeNav === 'ml') {
      return (
        <>
          <h4>ML Topics</h4>
          {/* Django sidebar links */}
          <div className={`box ${activePath === '/django-intro' ? 'active' : ''}`}>
            <Link to="/django-intro" onClick={() => handleLinkClick('/django-intro', 'django')}>Introduction</Link>
          </div>
          <div className={`box ${activePath === '/django-getstartred' ? 'active' : ''}`}>
            <Link to="/django-getstartred" onClick={() => handleLinkClick('/django-getstartred', 'django')}>Get Startred</Link>
          </div>
          {/* Add more Django links here */}
        </>
      );
    }
    // Add more conditions for other nav items if needed
    return null;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/pysolve">PySolve</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Stack
        </button>
        <button
          className="btn btn-light d-lg-none"
          id="sidebarToggle"
          aria-label="Toggle Sidebar"
          onClick={handleSidebarToggle}
        >
          Topics
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === 'python' ? 'active' : ''}`}
                href="/pysolve/introduction"
                onClick={() => setActiveNav('python')}
              >
                Python
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeNav === 'django' ? 'active' : ''}`}
                href="/pysolve/django-intro"
                onClick={() => setActiveNav('django')}
              >
                Django
              </a>
            </li>
            <li className="nav-item">
              <a className={`nav-link ${activeNav === 'ml' ? 'active' : ''}`}
              href="/pysolve/ml"
              onClick={() => setActiveNav('ml')}>Machine Learning</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
        {renderSidebarContent()}
      </div>
    </>
  );
};

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation(); // To get the current route
//   const [activePath, setActivePath] = useState(location.pathname); // Set initial active path
//   const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State for sidebar visibility

//   // Update the active path when the route changes
//   useEffect(() => {
//     setActivePath(location.pathname);
//   }, [location.pathname]);

//   // Handle sidebar toggle
//   const handleSidebarToggle = () => {
//     setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
//   };

//   // Handle active class toggle and close sidebar on link click
//   const handleLinkClick = (path) => {
//     setActivePath(path);
//     setIsSidebarVisible(false); // Close sidebar after link click
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//         <a className="navbar-brand" href="#">PySolve</a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           Stack
//         </button>
//         <button
//           className="btn btn-light d-lg-none"
//           id="sidebarToggle"
//           aria-label="Toggle Sidebar"
//           onClick={handleSidebarToggle}
//         >
//           Topics
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="page1.html">Python</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Django</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Machine Learning</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//       <div className={`sidebar ${isSidebarVisible ? 'show' : ''}`}>
//         <h4>Important Topics</h4>
//         <div className={`box ${activePath === '/introduction' ? 'active' : ''}`}>
//           <Link to="/introduction" onClick={() => handleLinkClick('/introduction')}>Introduction</Link>
//         </div>
//         <div className={`box ${activePath === '/variables' ? 'active' : ''}`}>
//           <Link to="/variables" onClick={() => handleLinkClick('/variables')}>Variables</Link>
//         </div>
  //       <div className={`box ${activePath === '/data-types' ? 'active' : ''}`}>
  //         <Link to="/data-types" onClick={() => handleLinkClick('/data-types')}>Data Types</Link>
  //       </div>
  //       <div className={`box ${activePath === '/type-casting' ? 'active' : ''}`}>
  //         <Link to="/type-casting" onClick={() => handleLinkClick('/type-casting')}>Type Casting</Link>
  //       </div>
  //       <div className={`box ${activePath === '/strings' ? 'active' : ''}`}>
  //         <Link to="/strings" onClick={() => handleLinkClick('/strings')}>Strings</Link>
  //       </div>
  //       <div className={`box ${activePath === '/boolean' ? 'active' : ''}`}>
  //         <Link to="/boolean" onClick={() => handleLinkClick('/boolean')}>Boolean</Link>
  //       </div>
  //       <div className={`box ${activePath === '/operators' ? 'active' : ''}`}>
  //         <Link to="/operators" onClick={() => handleLinkClick('/operators')}>Operators</Link>
  //       </div>
  //       <div className={`box ${activePath === '/conditionstatement' ? 'active' : ''}`}>
  //         <Link to="/conditionstatement" onClick={() => handleLinkClick('/conditionstatement')}>Condition Statement</Link>
  //       </div>
  //       <div className={`box ${activePath === '/loop' ? 'active' : ''}`}>
  //         <Link to="/loop" onClick={() => handleLinkClick('/loop')}>Loops</Link>
  //       </div>
  //       <div className={`box ${activePath === '/pythonlists' ? 'active' : ''}`}>
  //         <Link to="/pythonlists" onClick={() => handleLinkClick('/pythonlists')}>List</Link>
  //       </div>
  //       <div className={`box ${activePath === '/pythontuples' ? 'active' : ''}`}>
  //         <Link to="/pythontuples" onClick={() => handleLinkClick('/pythontuples')}>Tuple</Link>
  //       </div>
  //       <div className={`box ${activePath === '/pythonsets' ? 'active' : ''}`}>
  //         <Link to="/pythonsets" onClick={() => handleLinkClick('/pythonsets')}>Set</Link>
  //       </div>
  //       <div className={`box ${activePath === '/pythondictionaries' ? 'active' : ''}`}>
  //         <Link to="/pythondictionaries" onClick={() => handleLinkClick('/pythondictionaries')}>Dictionary</Link>
  //       </div>
  // <div className={`box ${activePath === '/functions' ? 'active' : ''}`}>
  //   <Link to="/functions" onClick={() => handleLinkClick('/functions')}>Functions</Link>
  // </div>
  // <div className={`box ${activePath === '/classes' ? 'active' : ''}`}>
  //   <Link to="/classes" onClick={() => handleLinkClick('/classes')}>Classes</Link>
  // </div>
  // <div className={`box ${activePath === '/inheritance' ? 'active' : ''}`}>
  //   <Link to="/inheritance" onClick={() => handleLinkClick('/inheritance')}>Inheritance</Link>
  // </div>
  // <div className={`box ${activePath === '/polymorphism' ? 'active' : ''}`}>
  //   <Link to="/polymorphism" onClick={() => handleLinkClick('/polymorphism')}>Polymorphism</Link>
  // </div>
  // <div className={`box ${activePath === '/scopes' ? 'active' : ''}`}>
  //   <Link to="/scopes" onClick={() => handleLinkClick('/scopes')}>Scopes</Link>
  // </div>
  // <div className={`box ${activePath === '/modules' ? 'active' : ''}`}>
  //   <Link to="/modules" onClick={() => handleLinkClick('/modules')}>Modules</Link>
  // </div>
  // <div className={`box ${activePath === '/exceptions' ? 'active' : ''}`}>
  //   <Link to="/exceptions" onClick={() => handleLinkClick('/exceptions')}>Exceptions</Link>
  // </div>
  // <div className={`box ${activePath === '/file-handling' ? 'active' : ''}`}>
  //   <Link to="/file-handling" onClick={() => handleLinkClick('/file-handling')}>File Handling</Link>
  // </div>
  // <div className={`box ${activePath === '/json' ? 'active' : ''}`}>
  //   <Link to="/json" onClick={() => handleLinkClick('/json')}>JSON</Link>
  // </div>
  // <div className={`box ${activePath === '/regular-expressions' ? 'active' : ''}`}>
  //   <Link to="/regular-expressions" onClick={() => handleLinkClick('/regular-expressions')}>Regular Expressions</Link>
  // </div>
  // <div className={`box ${activePath === '/generators' ? 'active' : ''}`}>
  //   <Link to="/generators" onClick={() => handleLinkClick('/generators')}>Generators</Link>
  // </div>
  // <div className={`box ${activePath === '/decorators' ? 'active' : ''}`}>
  //   <Link to="/decorators" onClick={() => handleLinkClick('/decorators')}>Decorators</Link>
  // </div>
  // <div className={`box ${activePath === '/lambda-functions' ? 'active' : ''}`}>
  //   <Link to="/lambda-functions" onClick={() => handleLinkClick('/lambda-functions')}>Lambda Functions</Link>
  // </div>
  // <div className={`box ${activePath === '/iterators' ? 'active' : ''}`}>
  //   <Link to="/iterators" onClick={() => handleLinkClick('/iterators')}>Iterators</Link>
  // </div>
  // <div className={`box ${activePath === '/context-managers' ? 'active' : ''}`}>
  //   <Link to="/context-managers" onClick={() => handleLinkClick('/context-managers')}>Context Managers</Link>
  // </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;



