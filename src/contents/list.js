import React from 'react';
import { Link } from 'react-router-dom';
const PythonLists = () => {
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
                    <h1 className="display-4 text-primary">Python Lists</h1>
                    <p className="lead">Lists are ordered collections of items in Python, which are mutable and can hold different data types.</p>
                </div>
                <div className="mt-4">
                    <h3>Creating a List</h3>
                    <p>Lists are created using square brackets.</p>
                    <pre>
                        <code id="create-list-code">
{`fruits = ["apple", "banana", "cherry"]`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Accessing List Items</h3>
                    <p>List items are accessed by their index, starting from 0.</p>
                    <pre>
                        <code id="access-list-item-code">
{`print(fruits[0])  # Output: apple`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Modifying List Items</h3>
                    <p>You can modify items in a list by assigning a new value to a specific index.</p>
                    <pre>
                        <code id="modify-list-item-code">
{`fruits[1] = "blueberry"
print(fruits)  # Output: ['apple', 'blueberry', 'cherry']`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Adding Items to a List</h3>
                    <p>Use the <code>append()</code> method to add an item to the end of a list.</p>
                    <pre>
                        <code id="append-list-code">
{`fruits.append("orange")
print(fruits)  # Output: ['apple', 'blueberry', 'cherry', 'orange']`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Inserting Items into a List</h3>
                    <p>Use the <code>insert()</code> method to add an item at a specific position.</p>
                    <pre>
                        <code id="insert-list-code">
{`fruits.insert(1, "kiwi")
print(fruits)  # Output: ['apple', 'kiwi', 'blueberry', 'cherry', 'orange']`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Removing Items from a List</h3>
                    <p>Use the <code>remove()</code> method to remove a specific item, or the <code>pop()</code> method to remove an item at a specific index.</p>
                    <pre>
                        <code id="remove-list-code">
{`fruits.remove("kiwi")
print(fruits)  # Output: ['apple', 'blueberry', 'cherry', 'orange']

fruits.pop(2)
print(fruits)  # Output: ['apple', 'blueberry', 'orange']`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>List Slicing</h3>
                    <p>You can access a range of items in a list by using slicing.</p>
                    <pre>
                        <code id="slice-list-code">
{`print(fruits[1:3])  # Output: ['blueberry', 'orange']`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Looping Through a List</h3>
                    <p>You can loop through the items in a list using a <code>for</code> loop.</p>
                    <pre>
                        <code id="loop-list-code">
{`for fruit in fruits:
    print(fruit)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Checking if an Item Exists in a List</h3>
                    <p>Use the <code>in</code> keyword to check if an item exists in a list.</p>
                    <pre>
                        <code id="check-list-item-code">
{`if "apple" in fruits:
    print("Apple is in the list!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>List Length</h3>
                    <p>Use the <code>len()</code> function to get the number of items in a list.</p>
                    <pre>
                        <code id="list-length-code">
{`print(len(fruits))  # Output: 3`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Sorting a List</h3>
                    <p>Use the <code>sort()</code> method to sort a list in ascending order.</p>
                    <pre>
                        <code id="sort-list-code">
{`fruits.sort()
print(fruits)  # Output: ['apple', 'blueberry', 'orange']`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Reversing a List</h3>
                    <p>Use the <code>reverse()</code> method to reverse the order of the list.</p>
                    <pre>
                        <code id="reverse-list-code">
{`fruits.reverse()
print(fruits)  # Output: ['orange', 'blueberry', 'apple']`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Copying a List</h3>
                    <p>You can copy a list using the <code>copy()</code> method.</p>
                    <pre>
                        <code id="copy-list-code">
{`new_fruits = fruits.copy()
print(new_fruits)  # Output: ['orange', 'blueberry', 'apple']`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>
                
                
        <div className="d-flex justify-content-between">
            <div className="mt-4">
                <Link to="/loop" className="btn btn-primary">Previous Page: Loop</Link>
            </div>
            <div className="mt-4">
                <Link to="/pythontuples" className="btn btn-primary">Next Page: Tuple</Link>
            </div>
        </div>
            </div>
        </div>
    );
};

export default PythonLists;
