import React from 'react';
import { Link } from 'react-router-dom';

const PythonSets = () => {
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
                    <h1 className="display-4 text-primary">Python Sets</h1>
                    <p className="lead">Sets are unordered collections of unique items in Python. They are mutable but cannot contain duplicate elements.</p>
                </div>
                <div className="mt-4">
                    <h3>Creating a Set</h3>
                    <p>Sets are created using curly braces or the <code>set()</code> function.</p>
                    <pre>
                        <code id="create-set-code">
{`fruits = {"apple", "banana", "cherry"}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Accessing Set Items</h3>
                    <p>You cannot access set items by index, but you can loop through the set or check if an item exists.</p>
                    <pre>
                        <code id="access-set-item-code">
{`for fruit in fruits:
    print(fruit)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Adding Items to a Set</h3>
                    <p>Use the <code>add()</code> method to add an item to a set.</p>
                    <pre>
                        <code id="add-set-code">
{`fruits.add("orange")
print(fruits)  # Output: {'apple', 'banana', 'cherry', 'orange'}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Updating a Set</h3>
                    <p>Use the <code>update()</code> method to add multiple items to a set.</p>
                    <pre>
                        <code id="update-set-code">
{`fruits.update(["kiwi", "mango"])
print(fruits)  # Output: {'apple', 'banana', 'cherry', 'orange', 'kiwi', 'mango'}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Removing Items from a Set</h3>
                    <p>Use the <code>remove()</code> or <code>discard()</code> method to remove an item from a set.</p>
                    <pre>
                        <code id="remove-set-code">
{`fruits.remove("banana")
print(fruits)  # Output: {'apple', 'cherry', 'orange', 'kiwi', 'mango'}

fruits.discard("kiwi")
print(fruits)  # Output: {'apple', 'cherry', 'orange', 'mango'}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Set Operations</h3>
                    <p>Perform set operations such as union, intersection, and difference.</p>
                    <pre>
                        <code id="set-operations-code">
{`set1 = {"apple", "banana", "cherry"}
set2 = {"banana", "kiwi", "mango"}

union_set = set1.union(set2)
print(union_set)  # Output: {'apple', 'banana', 'cherry', 'kiwi', 'mango'}

intersection_set = set1.intersection(set2)
print(intersection_set)  # Output: {'banana'}

difference_set = set1.difference(set2)
print(difference_set)  # Output: {'apple', 'cherry'}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Checking if an Item Exists in a Set</h3>
                    <p>Use the <code>in</code> keyword to check if an item exists in a set.</p>
                    <pre>
                        <code id="check-set-item-code">
{`if "apple" in fruits:
    print("Apple is in the set!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/pythontuples" className="btn btn-primary">Previous Page: Tuple</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/pythondictionaries" className="btn btn-primary">Next Page: Dictionaries</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonSets;
