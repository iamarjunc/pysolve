import React from 'react';
import { Link } from 'react-router-dom';

const Datatype = () => {
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
                    <h1 className="display-4 text-primary">Python Data Types</h1>
                    <p className="lead">In Python, data types are used to classify various types of data. Python is dynamically typed, meaning you do not need to declare the type of variable before using it.</p>
                </div>
                <div className="mt-4">
                    <h3>Built-in Data Types</h3>
                    <p>Python includes several built-in data types that you can use to store and manipulate data. Here are some common ones:</p>
                    
                    <h4>1. Strings</h4>
                    <p>Strings are sequences of characters enclosed in quotes. You can use single quotes, double quotes, or triple quotes.</p>
                    <pre>
                        <code id="string-code">text = "Hello, World!"</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>

                    </pre>

                    <h4>2. Integers</h4>
                    <p>Integers are whole numbers without a decimal point.</p>
                    <pre>
                    <code id="integer-code">age = 30</code>

                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>3. Floats</h4>
                    <p>Floats represent decimal numbers.</p>
                    <pre>
                        <code id="float-code">price = 19.99</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>4. Booleans</h4>
                    <p>Booleans represent truth values: <code>True</code> or <code>False</code>.</p>
                    <pre>
                    <code id="boolean-code">flag = True</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>5. Lists</h4>
                    <p>Lists are ordered collections of items that can be of different types.</p>
                    <pre>
                    <code id="list-code">items = [1, 2, 3]</code>

                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>6. Dictionaries</h4>
                    <p>Dictionaries are collections of key-value pairs.</p>
                    <pre>
                    <code id="dictionary-code">person = {'{\'name\': \'John\', \'age\': 30}'}</code>

                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>
                <br />
                <div className="mt-4">
                    <h3>Setting the Specific Data Type</h3>
                    <p>If you want to specify the data type, you can use the following constructor functions:</p>
                    
                    <h4>1. String</h4>
                    <p>Use the <code>str()</code> function to convert other data types to a string.</p>
                    <pre>
                    <code id="str-code">text = str(100)  # Converts integer 100 to string '100'</code>

                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>2. Integer</h4>
                    <p>Use the <code>int()</code> function to convert other data types to an integer.</p>
                    <pre>
                    <code id="int-code">age = int('30')  # Converts string '30' to integer 30</code>

                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>3. Float</h4>
                    <p>Use the <code>float()</code> function to convert other data types to a float.</p>
                    <pre>
                    <code id="float-convert-code">price = float('19.99')  # Converts string '19.99' to float 19.99</code>

                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>4. Boolean</h4>
                    <p>Use the <code>bool()</code> function to convert other data types to a boolean.</p>
                    <pre>
                    <code id="bool-code">flag = bool(1)  # Converts integer 1 to boolean True</code>

                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>5. List</h4>
                    <p>Use the <code>list()</code> function to convert other data types to a list.</p>
                    <pre>
                    <code id="list-convert-code">items = list('123')  # Converts string '123' to list ['1', '2', '3']</code>

                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>6. Dictionary</h4>
                    <p>Dictionaries are created directly using curly braces and key-value pairs.</p>
                    <pre>
                    <code id="dict-convert-code">person = dict(name='John', age=30)  # Creates a dictionary with keys 'name' and 'age'</code>

                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Datatype;
