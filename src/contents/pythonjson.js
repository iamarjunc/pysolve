import React from 'react';
import { Link } from 'react-router-dom';

const PythonJSONHandling = () => {
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
                    <h1 className="display-4 text-primary">Python JSON Handling</h1>
                    <p className="lead">JSON (JavaScript Object Notation) is a lightweight format for storing and exchanging data. Python provides built-in support for JSON through the <code>json</code> module.</p>
                </div>
                <div className="mt-4">
                    <h3>Importing the `json` Module</h3>
                    <p>Before you can work with JSON in Python, you need to import the <code>json</code> module.</p>
                    <pre>
                        <code id="import-json-code">
{`import json`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>json</code> module provides functions for encoding and decoding JSON data.</p>

                    <h3>Converting Python Objects to JSON</h3>
                    <p>You can convert Python objects (like dictionaries) to JSON strings using the <code>json.dumps()</code> function.</p>
                    <pre>
                        <code id="dict-to-json-code">
{`import json

data = {"name": "John", "age": 30, "city": "New York"}
json_string = json.dumps(data)
print(json_string)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>dumps()</code> method converts a Python dictionary into a JSON string. The output will be <code>{"{\"name\": \"John\", \"age\": 30, \"city\": \"New York\"}"}</code>.</p>

                    <h3>Converting JSON Strings to Python Objects</h3>
                    <p>To convert a JSON string back to a Python object, use the <code>json.loads()</code> function.</p>
                    <pre>
                        <code id="json-to-dict-code">
{`import json

json_string = '{"name": "John", "age": 30, "city": "New York"}'
data = json.loads(json_string)
print(data)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>loads()</code> method parses a JSON string and converts it into a Python dictionary. The output will be <code>{"{\"name\": \"John\", \"age\": 30, \"city\": \"New York\"}"}</code>.</p>

                    <h3>Writing JSON Data to a File</h3>
                    <p>To write JSON data to a file, use the <code>json.dump()</code> function. This function requires a file object and the data to be written.</p>
                    <pre>
                        <code id="write-json-file-code">
{`import json

data = {"name": "John", "age": 30, "city": "New York"}

with open("data.json", "w") as file:
    json.dump(data, file)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>dump()</code> method writes the Python dictionary <code>data</code> to a file named "data.json". The file will contain the JSON representation of the dictionary.</p>

                    <h3>Reading JSON Data from a File</h3>
                    <p>To read JSON data from a file and convert it into a Python object, use the <code>json.load()</code> function.</p>
                    <pre>
                        <code id="read-json-file-code">
{`import json

with open("data.json", "r") as file:
    data = json.load(file)
print(data)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>load()</code> method reads JSON data from "data.json" and converts it into a Python dictionary. The <code>print(data)</code> statement will output the dictionary.</p>

                    <h3>Pretty-Printing JSON Data</h3>
                    <p>For better readability, you can format the JSON data using the <code>indent</code> parameter in <code>json.dumps()</code>.</p>
                    <pre>
                        <code id="pretty-print-json-code">
{`import json

data = {"name": "John", "age": 30, "city": "New York"}
json_string = json.dumps(data, indent=4)
print(json_string)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>indent</code> parameter in <code>dumps()</code> adds indentation to the JSON string, making it easier to read. The output will be formatted with an indentation level of 4 spaces.</p>

                    <h3>Handling JSON Errors</h3>
                    <p>When working with JSON, handle errors such as <code>JSONDecodeError</code> to manage cases where the JSON data is invalid or improperly formatted.</p>
                    <pre>
                        <code id="json-errors-code">
{`import json

json_string = '{"name": "John", "age": 30, "city": "New York"'

try:
    data = json.loads(json_string)
except json.JSONDecodeError as e:
    print("Invalid JSON:", e)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> If the JSON string is invalid, a <code>JSONDecodeError</code> will be raised. The <code>try</code> block attempts to parse the JSON string, and the <code>except</code> block handles any errors by printing an error message.</p>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/file-handling" className="btn btn-primary">Previous Page: File Handling</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/regular-expressions" className="btn btn-primary">Next Page: Regular Expressions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonJSONHandling;
