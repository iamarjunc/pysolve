import React from 'react';
import { Link } from 'react-router-dom';

const DjangoGetStarted = () => {
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
            <div className="content">
                <div className="jumbotron jumbotron-fluid bg-light p-4 rounded">
                    <h1 className="display-4 text-primary">Getting Started with Django</h1>
                    <p className="lead">
                        This page will guide you through the initial steps to get started with Django. From setting up your environment to creating your first Django project, you'll find all the essential information to begin your journey with this powerful web framework.
                    </p>
                </div>

                <div className="mt-4">
                    <h3>Setting Up Your Environment</h3>
                    <br/>

                    <ul>
                        <li>
                            <strong>Install Python:</strong> Django is a Python-based framework, so you'll need Python installed on your machine. Download and install Python from the official website if you haven't already: <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org</a>.
                            <br/><br/>
                            Make sure to add Python to your system’s PATH variable during installation.
                        </li>
                        <li>
                            <strong>Create a Virtual Environment:</strong> It's good practice to use a virtual environment to manage your project's dependencies. You can create a virtual environment using the following command:
                            <pre>
                                <code>python -m venv myenv</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                            Activate the virtual environment:
                            <ul>
                                <li>On Windows: <pre><code>myenv\Scripts\activate</code></pre></li>
                                <li>On macOS/Linux: <pre><code>source myenv/bin/activate</code></pre></li>
                            </ul>
                        </li>
                        <li>
                            <strong>Install Django:</strong> With your virtual environment activated, install Django using pip:
                            <pre>
                                <code>pip install django</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                        </li>
                    </ul>
                    <br/>

                    <h3>Creating Your First Django Project</h3>
                    <br/>
                    
                    <ul>
                        <li>
                            <strong>Start a New Project:</strong> Use Django's command-line utility to create a new project:
                            <pre>
                                <code>django-admin startproject myproject</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                            This will create a directory named <code>myproject</code> with the basic project structure.
                            <br/>
                            <br/>

                        </li>
                        <li>
                            <strong>Navigate to Your Project Directory:</strong> Change into your project’s directory:
                            <pre>
                                <code>cd myproject</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                        </li>
                        <li>
                            <strong>Run the Development Server:</strong> Start the development server to see your project in action:
                            <pre>
                                <code>python manage.py runserver</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                            Open your web browser and go to <code>http://127.0.0.1:8000/</code> to see the default Django welcome page.
                        </li>
                    </ul>
                    <br/>

                    <h3>Understanding the Project Structure</h3>
                    <p>Your newly created Django project will have the following structure:</p>
                    <ul>
                        <li>
                            <strong>manage.py:</strong> A command-line utility that lets you interact with this Django project. You can use it to run the development server, make migrations, and more.
                        </li>
                        <li>
                            <strong>myproject/:</strong> The project directory that contains the core settings and configuration for your Django project.
                            <ul>
                                <li><strong>__init__.py:</strong> An empty file that tells Python that this directory should be considered a Python package.</li>
                                <li><strong>settings.py:</strong> Contains all the settings for your Django project, such as database configurations and installed apps.</li>
                                <li><strong>urls.py:</strong> The URL declarations for the project. This file routes URLs to views.</li>
                                <li><strong>wsgi.py:</strong> An entry point for WSGI-compatible web servers to serve your project.</li>
                            </ul>
                        </li>
                    </ul>
                    <br/>

                    <h3>Next Steps</h3>
                    <ul>
                        <li>
                            <strong>Create an App:</strong> In Django, an app is a web application that does something e.g., blog, polling app. You can create an app using:
                            <pre>
                                <code>python manage.py startapp myapp</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                        </li>
                        <li>
                            <strong>Define Models:</strong> Models define the data structure of your application. Learn how to define models in <code>models.py</code> and make migrations.
                        </li>
                        <li>
                            <strong>Create Views and Templates:</strong> Start building views to handle logic and templates to render HTML.
                        </li>
                    </ul>

                    <div className="d-flex justify-content-between">
                        <div className="mt-4">
                            <Link to="/django-intro" className="btn btn-primary">Previous Page: Introduction to Django</Link>
                        </div>
                        <div className="mt-4">
                            <Link to="/nextstep" className="btn btn-primary">Next Page: Building Your First App</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DjangoGetStarted;
