// Intro.js
import React from 'react';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootst    rap.min.css'; // Ensure Bootstrap is available

const Introduction = () => {
    // Function to handle code copy
    const copyCode = (btn) => {
        const codeBlock = btn.previousElementSibling;
        const range = document.createRange();
        range.selectNode(codeBlock);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        try {
            document.execCommand('copy');
            btn.innerText = 'Copied!';
            setTimeout(() => {
                btn.innerText = 'Copy';
            }, 2000);
        } catch (err) {
            alert('Failed to copy text: ' + err);
        }
        window.getSelection().removeAllRanges();
    };

    return (
        <div>

            {/* Main Content */}
            <div className="content">
                <div className="jumbotron jumbotron-fluid bg-light p-4 rounded">
                    <h1 className="display-4 text-primary">Introduction to Python</h1>
                    <p className="lead">Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in web development, data science, automation, and many other fields.</p>
                </div>
                <div className="mt-4">
                    <h3>Why Python?</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Easy to learn and read</li>
                        <li className="list-group-item">Versatile and powerful</li>
                        <li className="list-group-item">Extensive libraries and frameworks</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3>Example: Hello World in Python</h3>
                    <p>Below is an example of a simple Python program that prints "Hello, World!" to the console.</p>
                    <pre>
                        <code>print("Hello, World!")</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>
                <div className="mt-4">
                    <h2>Setting Up Your Environment</h2>
                    <br />
                    <h4>Installing Python:</h4>
                    <ul>
                        <li>Download and install Python from the <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">official website</a>.</li>
                        <li>Use an IDE or code editor like PyCharm, VSCode, or Jupyter Notebook.</li>
                    </ul>
                    <h4>Running Python:</h4>
                    <ul>
                        <li>You can run Python code from the command line using <code>python filename.py</code> or interactively through the Python shell.</li>
                    </ul>
                </div>
                <div className="mt-4 text-right">
                    <Link to="/variables" className="btn btn-primary">Next Page: Variables</Link>
                </div>
            </div>
 
        </div>
    );
};

export default Introduction;
