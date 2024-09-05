import React from 'react';
import { Link } from 'react-router-dom';
const Variables = () => {
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
                    <h1 className="display-4 text-primary">Python Variables</h1>
                    <p className="lead">Variables are used to store data that can be referenced and manipulated in a program. In Python, variables are dynamically typed and can hold different types of values.</p>
                </div>
                <div className="mt-4">
                    <h3>Defining Variables</h3>
                    <p>To define a variable in Python, simply assign a value to a variable name using the equals sign (<code>=</code>).</p>
                    <pre><code># Define a variable <br/>
name = "Alice"<br/>
age = 30<br/>
height = 5.6</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>

                <div className="mt-4">
                    <h3>Variable Name Rules</h3>
                    <ul className="list-group">
                        <li className="list-group-item">Variable names must start with a letter or an underscore (_).</li>
                        <li className="list-group-item">Variable names can contain letters, numbers, and underscores, but cannot start with a number.</li>
                        <li className="list-group-item">Variable names are case-sensitive (e.g., <code>age</code> and <code>Age</code> are different variables).</li>
                        <li className="list-group-item">Avoid using reserved keywords as variable names (e.g., <code>class</code>, <code>for</code>, <code>if</code>).</li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h3>Variable Types</h3>
                    <ul className="list-group">
                        <li className="list-group-item">String: Text data (e.g., <code>name = "Alice"</code>)
                            <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                        </li>
                        <li className="list-group-item">Integer: Whole numbers (e.g., <code>age = 30</code>)
                            <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                        </li>
                        <li className="list-group-item">Float: Decimal numbers (e.g., <code>height = 5.6</code>)
                            <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h3>Important Variable Lessons</h3>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Variable Reassignment:</strong> You can change the value of a variable by reassigning it. For example:
                            <pre><code>age = 30<br/>age = 31</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                        </li>
                        <li className="list-group-item">
                            <strong>Dynamic Typing:</strong> In Python, variables are dynamically typed. This means you can assign different types of values to the same variable:
                            <pre><code>value = "Hello"<br/>value = 100</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                        </li>
                        <li className="list-group-item">
                            <strong>Multiple Assignment:</strong> You can assign a single value to multiple variables at once:
                            <pre><code>x = y = z = 10</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                        </li>
                        <li className="list-group-item">
                            <strong>Swapping Values:</strong> You can swap the values of two variables in a single line:
                            <pre><code>a, b = b, a</code>
                                <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                            </pre>
                        </li>
                        <li className="list-group-item">
                            <strong>Global vs Local Variables:</strong> Variables defined inside a function are local to that function, while variables defined outside are global. Be careful with variable scope to avoid unintended side effects.
                        </li>
                    </ul>
                </div>

                <div className="mt-4">
                    <h3>Define a Variable</h3>
                    <pre><code className="language-python"># Define a variable<br/>name = "John Doe"<br/>age = 25<br/>height = 5.9</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>

                <h3 className="mt-4">Variable Naming Conventions</h3>
                <p>Follow these conventions when naming variables in Python:</p>
                <ul>
                    <li>Variable names can contain letters, numbers, and underscores (<code>_</code>).</li>
                    <li>They must start with a letter or an underscore, not a number.</li>
                    <li>Variable names are case-sensitive.</li>
                </ul>
                <pre><code className="language-python"># Valid variable names<br/>first_name = "Alice"<br/>_last_name = "Smith"<br/>age2 = 30<br/># Invalid variable names<br/>2nd_place = "Winner"  # Starts with a number</code>
                    <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                </pre>
            </div>
        </div>
    );
};

export default Variables;
