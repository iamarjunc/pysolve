import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HomePage.css'; // Assuming you have a CSS file for styling
import logo from '../images/logo.png';

const HomePage = () => {
    // Clear localStorage and sessionStorage on component mount
    useEffect(() => {
        localStorage.clear();
        sessionStorage.clear();
    }, []);

    const location = useLocation();
    const [activePath, setActivePath] = useState(location.pathname);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [activeNav, setActiveNav] = useState(() => {
        return sessionStorage.getItem('activeNav') || 'python';
    });

    const handleLinkClick = (path, nav) => {
        console.log(path, nav);
        setActivePath(path);  // Update active path
        setActiveNav(nav);    // Set the active navigation item
        sessionStorage.setItem('activeNav', nav); // Store activeNav in sessionStorage
        sessionStorage.setItem('sideNav', path); // Store activeNav in sessionStorage
        setIsSidebarVisible(false); // Close the sidebar if necessary
    };
    
    return (
        <div className="home-page">
            <div className="jumbotron jumbotron-fluid bg-light p-4 rounded text-center">
                <img src={logo} alt="Pysolve Logo" className="logo mb-3" />
                <h1 className="display-4 text-primary">Welcome to Pysolve Tutorials</h1>
                <p className="lead text-dark">Your ultimate destination for mastering Python, Django, Machine Learning, and Artificial Intelligence.</p>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3 mb-4">
                        <div className="card border-primary">
                            <div className="card-body">
                                <h5 className="card-title text-primary">Python</h5>
                                <p className="card-text text-dark">Explore Python programming from the ground up. Build robust applications and scripts with ease.</p>
                                <Link to="/introduction"
                                    onClick={() => handleLinkClick('/introduction', 'python')}
                                    className={`btn btn-success ${activePath === '/introduction' ? 'active' : ''}`}>
                                    Explore Python</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card border-success">
                            <div className="card-body">
                                <h5 className="card-title text-success">Django</h5>
                                <p className="card-text text-dark">Dive into Django for powerful web development. Create scalable and dynamic web applications effortlessly.</p>
                                <Link to="/django-intro"
                                    onClick={() => handleLinkClick('/django-intro', 'django')}
                                    className={`btn btn-success ${activePath === '/django-intro' ? 'active' : ''}`}>
                                    Explore Django
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card border-info">
                            <div className="card-body">
                                <h5 className="card-title text-info">Machine Learning</h5>
                                <p className="card-text text-dark">Get hands-on with ML techniques and algorithms. Learn to build models and analyze complex data.</p>
                                <Link to="/ml" className="btn btn-info">Explore ML</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 mb-4">
                        <div className="card border-danger">
                            <div className="card-body">
                                <h5 className="card-title text-danger">Artificial Intelligence</h5>
                                <p className="card-text text-dark">Understand AI concepts and applications. Develop intelligent systems to solve sophisticated problems.</p>
                                <Link to="/ai" className="btn btn-danger">Explore AI</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-4">
                    <Link to="/introduction" className="btn btn-success btn-lg">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
