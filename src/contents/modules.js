import React from 'react';
import { Link } from 'react-router-dom';

const PythonModules = () => {
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
                    <h1 className="display-4 text-primary">Python Modules</h1>
                    <p className="lead">Modules are a way to organize and reuse code in Python. They allow you to break your code into manageable sections and make it easier to maintain and understand.</p>
                </div>
                <div className="mt-4">
                    <h3>Introduction to Modules</h3>
                    <p>A module is a file containing Python definitions and statements. Modules allow you to logically organize your Python code. They can define functions, classes, and variables that you can use in other modules or scripts.</p>

                    <h3>Creating a Module</h3>
                    <p>To create a module, simply save your Python code in a file with a `.py` extension. For example, `my_module.py`:</p>
                    <pre>
                        <code id="create-module-code">
{`# my_module.py
def greet(name):
    return f"Hello, {name}!"

def add(a, b):
    return a + b`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The file `my_module.py` defines two functions, `greet` and `add`. These functions can be used in other Python scripts by importing the module.</p>

                    <h3>Importing a Module</h3>
                    <p>To use the functions or variables defined in a module, you need to import the module into your script.</p>
                    <pre>
                        <code id="import-module-code">
{`# main.py
import my_module

print(my_module.greet("Alice"))  # Output: Hello, Alice!
print(my_module.add(5, 3))       # Output: 8`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `import my_module` statement imports the `my_module` module into `main.py`. You can then access its functions using the module name followed by a dot (e.g., `my_module.greet`).</p>

                    <h3>Importing Specific Functions</h3>
                    <p>You can import specific functions or variables from a module directly into your script's namespace.</p>
                    <pre>
                        <code id="import-specific-functions-code">
{`# main.py
from my_module import greet, add

print(greet("Bob"))  # Output: Hello, Bob!
print(add(10, 5))    # Output: 15`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `from my_module import greet, add` statement imports only the `greet` and `add` functions from `my_module` directly into the script's namespace. This allows you to use the functions without prefixing them with the module name.</p>

                    <h3>Importing All Functions</h3>
                    <p>Using `import *` imports all functions and variables from a module, which may lead to conflicts if there are name clashes.</p>
                    <pre>
                        <code id="import-all-functions-code">
{`# main.py
from my_module import *

print(greet("Charlie"))  # Output: Hello, Charlie!
print(add(20, 7))        # Output: 27`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `from my_module import *` statement imports everything from `my_module`. While convenient, it is not recommended due to potential naming conflicts and reduced code readability.</p>

                    <h3>Aliasing Modules</h3>
                    <p>You can give a module an alias using the `as` keyword to make it easier to reference or to resolve naming conflicts.</p>
                    <pre>
                        <code id="aliasing-modules-code">
{`# main.py
import my_module as mm

print(mm.greet("David"))  # Output: Hello, David!
print(mm.add(3, 6))       # Output: 9`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `import my_module as mm` statement imports `my_module` and assigns it the alias `mm`. This allows you to use `mm` as a shorthand to access the module's functions and variables.</p>

                    <h3>Module Search Path</h3>
                    <p>Python looks for modules in the directories listed in `sys.path`. This includes the directory of the script being executed and other directories specified in the environment variable `PYTHONPATH`.</p>
                    <pre>
                        <code id="module-search-path-code">
{`import sys
print(sys.path)  # Output: List of directories where Python looks for modules`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `sys.path` list contains the directories Python searches for modules. You can modify this list to add custom paths where Python should look for modules.</p>

                    <h3>Creating a Package</h3>
                    <p>A package is a collection of modules organized in directories. It includes an `__init__.py` file that initializes the package.</p>
                    <pre>
                        <code id="create-package-code">
{`# my_package/__init__.py
# This file can be empty or include package initialization code

# my_package/module1.py
def function1():
    return "Function 1 from module 1"

# my_package/module2.py
def function2():
    return "Function 2 from module 2"}

# main.py
from my_package.module1 import function1
from my_package.module2 import function2

print(function1())  # Output: Function 1 from module 1
print(function2())  # Output: Function 2 from module 2`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> A package is created by placing modules inside a directory with an `__init__.py` file. This file is used to initialize the package and can be empty. The `main.py` script imports functions from different modules within the `my_package` package.</p>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/scopes" className="btn btn-primary">Previous Page: Scopes</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/exceptions" className="btn btn-primary">Next Page: Exceptions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonModules;
