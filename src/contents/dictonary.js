import React from 'react';
import { Link } from 'react-router-dom';

const PythonDictionaries = () => {
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
                    <h1 className="display-4 text-primary">Python Dictionaries</h1>
                    <p className="lead">Dictionaries are collections of key-value pairs in Python, which are unordered, mutable, and indexed.</p>
                </div>
                <div className="mt-4">
                    <h3>Creating a Dictionary</h3>
                    <p>Dictionaries are created using curly braces, with key-value pairs separated by colons.</p>
                    <pre>
                        <code id="create-dict-code">
{`my_dict = {"name": "John", "age": 30, "city": "New York"}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Accessing Dictionary Items</h3>
                    <p>You can access the value associated with a specific key using square brackets.</p>
                    <pre>
                        <code id="access-dict-item-code">
{`print(my_dict["name"])  # Output: John`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Modifying Dictionary Items</h3>
                    <p>You can modify the value associated with a specific key.</p>
                    <pre>
                        <code id="modify-dict-item-code">
{`my_dict["age"] = 31
print(my_dict)  # Output: {'name': 'John', 'age': 31, 'city': 'New York'}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Adding Items to a Dictionary</h3>
                    <p>Add a new key-value pair to a dictionary by assigning a value to a new key.</p>
                    <pre>
                        <code id="add-dict-item-code">
{`my_dict["email"] = "john@example.com"
print(my_dict)  # Output: {'name': 'John', 'age': 31, 'city': 'New York', 'email': 'john@example.com'}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Removing Items from a Dictionary</h3>
                    <p>Use the <code>pop()</code> method to remove a key-value pair, or the <code>del</code> statement to delete a specific key.</p>
                    <pre>
                        <code id="remove-dict-item-code">
{`my_dict.pop("city")
print(my_dict)  # Output: {'name': 'John', 'age': 31, 'email': 'john@example.com'}

del my_dict["email"]
print(my_dict)  # Output: {'name': 'John', 'age': 31}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Looping Through a Dictionary</h3>
                    <p>You can loop through the keys or key-value pairs in a dictionary using a <code>for</code> loop.</p>
                    <pre>
                        <code id="loop-dict-code">
{`for key, value in my_dict.items():
    print(key, value)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Checking if a Key Exists in a Dictionary</h3>
                    <p>Use the <code>in</code> keyword to check if a key exists in a dictionary.</p>
                    <pre>
                        <code id="check-dict-key-code">
{`if "name" in my_dict:
    print("Name exists in the dictionary!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Dictionary Length</h3>
                    <p>Use the <code>len()</code> function to get the number of key-value pairs in a dictionary.</p>
                    <pre>
                        <code id="dict-length-code">
{`print(len(my_dict))  # Output: 2`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Nesting Dictionaries</h3>
                    <p>You can nest dictionaries inside another dictionary.</p>
                    <pre>
                        <code id="nest-dict-code">
{`my_family = {
  "child1": {"name": "Emily", "age": 5},
  "child2": {"name": "Jacob", "age": 7}
}
print(my_family)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Copying a Dictionary</h3>
                    <p>You can copy a dictionary using the <code>copy()</code> method or the <code>dict()</code> constructor.</p>
                    <pre>
                        <code id="copy-dict-code">
{`new_dict = my_dict.copy()
print(new_dict)  # Output: {'name': 'John', 'age': 31}

new_dict2 = dict(my_dict)
print(new_dict2)  # Output: {'name': 'John', 'age': 31}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>
                
                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/pythonsets" className="btn btn-primary">Previous Page: Sets</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/functions" className="btn btn-primary">Next Page: Functions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonDictionaries;
