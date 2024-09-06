import React from 'react';
import { Link } from 'react-router-dom';

const PythonScopes = () => {
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
                    <h1 className="display-4 text-primary">Python Scopes</h1>
                    <p className="lead">Scope in Python refers to the visibility and lifetime of variables in different parts of the code. Understanding scope helps in avoiding conflicts and managing variables efficiently.</p>
                </div>
                <div className="mt-4">
                    <h3>Introduction to Scope</h3>
                    <p>In Python, scope determines the visibility and accessibility of variables. There are four main types of scopes:</p>
                    <ul>
                        <li><strong>Local Scope:</strong> Variables defined within a function or block are in the local scope of that function or block.</li>
                        <li><strong>Enclosing Scope:</strong> The scope of any enclosing functions, which is also known as the non-local or nested scope.</li>
                        <li><strong>Global Scope:</strong> Variables defined at the top-level of a script or module, accessible from anywhere in the module.</li>
                        <li><strong>Built-in Scope:</strong> The scope of built-in names that are available in any module, such as `print()` and `len()`.</li>
                    </ul>

                    <h3>Local Scope</h3>
                    <p>Variables defined inside a function are in the local scope of that function and cannot be accessed outside it.</p>
                    <pre>
                        <code id="local-scope-code">
{`def my_function():
    local_var = "I am local to my_function"
    print(local_var)

my_function()
print(local_var)  # This will raise an error`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The variable `local_var` is defined inside `my_function`. It can be accessed and printed inside `my_function`, but trying to access it outside the function will raise an error because it is not visible in the global scope.</p>

                    <h3>Enclosing Scope</h3>
                    <p>Enclosing scope refers to the scope of any nested functions. A nested function can access variables from its enclosing (outer) function's scope.</p>
                    <pre>
                        <code id="enclosing-scope-code">
{`def outer_function():
    outer_var = "I am from outer_function"

    def inner_function():
        print(outer_var)  # Accessing variable from the enclosing scope

    inner_function()

outer_function()`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> In this example, `inner_function` is defined inside `outer_function`. It can access `outer_var` from its enclosing scope. However, `outer_function` cannot access `inner_function`'s local variables.</p>

                    <h3>Global Scope</h3>
                    <p>Variables defined at the top level of a script or module are in the global scope and can be accessed from any function or block in the module.</p>
                    <pre>
                        <code id="global-scope-code">
{`global_var = "I am global"

def my_function():
    print(global_var)  # Accessing global variable

my_function()
print(global_var)  # Accessing global variable outside the function`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The variable `global_var` is defined at the top level of the script and can be accessed both inside and outside `my_function`. It has global scope and is visible throughout the module.</p>

                    <h3>Built-in Scope</h3>
                    <p>Built-in scope contains built-in names and functions that are available globally. This scope is accessible from any part of your code.</p>
                    <pre>
                        <code id="builtin-scope-code">
{`print(len("Hello"))  # Using built-in function len
print(max([1, 2, 3]))  # Using built-in function max`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The functions `len()` and `max()` are part of the built-in scope. They can be used anywhere in the code without the need for imports or definitions. The built-in scope provides standard functionality that is always available.</p>

                    <h3>Scope Resolution with the `global` Keyword</h3>
                    <p>Use the `global` keyword to modify global variables inside a function. Without it, Python treats variables assigned in a function as local to that function.</p>
                    <pre>
                        <code id="global-keyword-code">
{`global_var = "I am global"

def modify_global():
    global global_var
    global_var = "I have been modified"

modify_global()
print(global_var)  # Output: I have been modified`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `global` keyword is used inside `modify_global` to indicate that `global_var` refers to the global variable defined outside the function. This allows the function to modify the global variable, which is reflected outside the function.</p>

                    <h3>Scope Resolution with the `nonlocal` Keyword</h3>
                    <p>Use the `nonlocal` keyword to modify variables in the nearest enclosing scope that is not global. This is particularly useful in nested functions.</p>
                    <pre>
                        <code id="nonlocal-keyword-code">
{`def outer_function():
    count = 0

    def inner_function():
        nonlocal count
        count += 1
        print(count)

    inner_function()
    inner_function()

outer_function()  # Output: 1 2`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `nonlocal` keyword is used to modify the `count` variable in the nearest enclosing scope (i.e., `outer_function`). Each time `inner_function` is called, it increments the `count` variable, demonstrating how `nonlocal` affects the variable in the enclosing scope.</p>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/polymorphism" className="btn btn-primary">Previous Page: Polymorphism</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/modules" className="btn btn-primary">Next Page: Module</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonScopes;
