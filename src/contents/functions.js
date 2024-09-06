import React from 'react';
import { Link } from 'react-router-dom';

const PythonFunctions = () => {
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
                    <h1 className="display-4 text-primary">Python Functions</h1>
                    <p className="lead">Functions in Python are blocks of code that perform a specific task. They allow code reuse and better organization.</p>
                </div>
                <div className="mt-4">
                    <h3>Defining a Function</h3>
                    <p>Functions are defined using the <code>def</code> keyword, followed by the function name and parentheses.</p>
                    <pre>
                        <code id="define-function-code">
{`def greet():
    print("Hello, World!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Calling a Function</h3>
                    <p>To call a function, use the function name followed by parentheses.</p>
                    <pre>
                        <code id="call-function-code">
{`greet()  # Output: Hello, World!`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Function Parameters</h3>
                    <p>Functions can accept parameters to customize their behavior.</p>
                    <pre>
                        <code id="function-parameters-code">
{`def greet(name):
    print(f"Hello, {name}!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Default Parameter Values</h3>
                    <p>You can provide default values for parameters.</p>
                    <pre>
                        <code id="default-parameter-code">
{`def greet(name="World"):
    print(f"Hello, {name}!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Return Values</h3>
                    <p>Functions can return values using the <code>return</code> statement.</p>
                    <pre>
                        <code id="return-value-code">
{`def add(a, b):
    return a + b`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Lambda Functions</h3>
                    <p>Lambda functions are small anonymous functions defined with the <code>lambda</code> keyword.</p>
                    <pre>
                        <code id="lambda-function-code">
{`add = lambda a, b: a + b
print(add(2, 3))  # Output: 5`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Docstrings</h3>
                    <p>Docstrings are used to provide documentation for functions.</p>
                    <pre>
                        <code id="docstring-code">
{`def greet(name):
    """
    This function greets the person whose name is passed.
    """
    print(f"Hello, {name}!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Recursive Functions</h3>
                    <p>Functions can call themselves, which is known as recursion.</p>
                    <pre>
                        <code id="recursive-function-code">
{`def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))  # Output: 120`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/pythondictionaries" className="btn btn-primary">Previous Page: Dictionaries</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/classes" className="btn btn-primary">Next Page: Class</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonFunctions;
