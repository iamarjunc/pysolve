import React from 'react';
import { Link } from 'react-router-dom';

const PythonContextManagersHandling = () => {
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
                    <h1 className="display-4 text-primary">Python Context Managers</h1>
                    <p className="lead">Context managers are used in Python to manage resources efficiently, ensuring that they are properly acquired and released. They are often used for tasks such as file handling, database connections, and locks.</p>
                </div>
                <div className="mt-4">
                    <h3>What is a Context Manager?</h3>
                    <p>A context manager is an object that defines the methods <code>__enter__()</code> and <code>__exit__()</code>. These methods are used to set up and tear down resources.</p>
                    <p>Context managers are typically used in conjunction with the <code>with</code> statement, which ensures that resources are cleaned up promptly and correctly.</p>

                    <h3>Basic Usage with <code>with</code></h3>
                    <p>Here’s a simple example of using a context manager to handle file operations:</p>
                    <pre>
                        <code id="basic-context-manager-code">
{`with open('example.txt', 'w') as file:
    file.write('Hello, world!')
# File is automatically closed after the block is executed`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>with</code> statement is used to open a file for writing. The file is automatically closed after the block of code inside the <code>with</code> statement is executed, even if an error occurs.</p>

                    <h3>Creating a Custom Context Manager</h3>
                    <p>To create a custom context manager, you can define a class with <code>__enter__()</code> and <code>__exit__()</code> methods:</p>
                    <pre>
                        <code id="custom-context-manager-code">
{`class ManagedResource:
    def __enter__(self):
        print('Resource is acquired')
        return self

    def __exit__(self, exc_type, exc_value, traceback):
        print('Resource is released')
        # Handle exception if any
        return False  # Propagate exception if any

# Example usage
with ManagedResource() as resource:
    print('Using resource')
# Output: 
# Resource is acquired
# Using resource
# Resource is released`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>ManagedResource</code> class is a custom context manager. The <code>__enter__()</code> method is called when the resource is acquired, and the <code>__exit__()</code> method is called when the block of code is exited. The <code>__exit__()</code> method can handle exceptions if any are raised.</p>

                    <h3>Using Context Managers for Resource Management</h3>
                    <p>Context managers are particularly useful for managing resources such as:</p>
                    <ul>
                        <li><strong>File I/O:</strong> Ensures files are properly closed after use.</li>
                        <li><strong>Database Connections:</strong> Manages connections to databases, ensuring they are closed properly.</li>
                        <li><strong>Network Connections:</strong> Manages network connections, ensuring they are properly established and closed.</li>
                    </ul>
                    <p>For example, here’s how you might use a context manager for a database connection:</p>
                    <pre>
                        <code id="db-context-manager-code">
{`import sqlite3

class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name
        self.connection = None

    def __enter__(self):
        self.connection = sqlite3.connect(self.db_name)
        return self.connection

    def __exit__(self, exc_type, exc_value, traceback):
        if self.connection:
            self.connection.close()

# Example usage
with DatabaseConnection('example.db') as conn:
    cursor = conn.cursor()
    cursor.execute('CREATE TABLE IF NOT EXISTS example (id INTEGER PRIMARY KEY, value TEXT)')
    conn.commit()`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>DatabaseConnection</code> class manages a database connection. The <code>__enter__()</code> method opens the connection, and the <code>__exit__()</code> method ensures the connection is closed after use.</p>

                    <h3>Contextlib Module for Context Managers</h3>
                    <p>The <code>contextlib</code> module provides utilities for working with context managers. For example, you can use the <code>contextmanager</code> decorator to create a context manager using a generator function:</p>
                    <pre>
                        <code id="contextlib-example-code">
{`from contextlib import contextmanager

@contextmanager
def open_resource(name):
    print(f'Opening {name}')
    try:
        yield name
    finally:
        print(f'Closing {name}')

# Example usage
with open_resource('my_resource') as resource:
    print(f'Using {resource}')
# Output:
# Opening my_resource
# Using my_resource
# Closing my_resource`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>@contextmanager</code> decorator simplifies the creation of context managers. The generator function yields the resource and handles setup and teardown using <code>try...finally</code>.</p>

                    <h3>When to Use Context Managers</h3>
                    <p>Use context managers when you need to manage resources or perform setup and teardown operations in a reliable and concise way. They ensure that resources are properly released and cleanup is performed even if an error occurs.</p>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/iterators" className="btn btn-primary">Previous Page: Iterators</Link>
                    </div>
                    <div className="mt-4">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonContextManagersHandling;
