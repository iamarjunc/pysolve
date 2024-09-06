import React from 'react';
import { Link } from 'react-router-dom';

const PythonTuples = () => {
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
                    <h1 className="display-4 text-primary">Python Tuples</h1>
                    <p className="lead">Tuples are ordered collections of items in Python, which are immutable and can hold different data types.</p>
                </div>
                <div className="mt-4">
                    <h3>Creating a Tuple</h3>
                    <p>Tuples are created using parentheses.</p>
                    <pre>
                        <code id="create-tuple-code">
{`fruits = ("apple", "banana", "cherry")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Accessing Tuple Items</h3>
                    <p>Tuple items are accessed by their index, starting from 0.</p>
                    <pre>
                        <code id="access-tuple-item-code">
{`print(fruits[0])  # Output: apple`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Unpacking a Tuple</h3>
                    <p>You can unpack a tuple into variables.</p>
                    <pre>
                        <code id="unpack-tuple-code">
{`(fruit1, fruit2, fruit3) = fruits
print(fruit1)  # Output: apple`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Looping Through a Tuple</h3>
                    <p>You can loop through the items in a tuple using a <code>for</code> loop.</p>
                    <pre>
                        <code id="loop-tuple-code">
{`for fruit in fruits:
    print(fruit)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Checking if an Item Exists in a Tuple</h3>
                    <p>Use the <code>in</code> keyword to check if an item exists in a tuple.</p>
                    <pre>
                        <code id="check-tuple-item-code">
{`if "apple" in fruits:
    print("Apple is in the tuple!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Tuple Length</h3>
                    <p>Use the <code>len()</code> function to get the number of items in a tuple.</p>
                    <pre>
                        <code id="tuple-length-code">
{`print(len(fruits))  # Output: 3`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Joining Tuples</h3>
                    <p>You can join two or more tuples using the <code>+</code> operator.</p>
                    <pre>
                        <code id="join-tuple-code">
{`new_tuple = fruits + ("orange", "kiwi")
print(new_tuple)  # Output: ('apple', 'banana', 'cherry', 'orange', 'kiwi')`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Tuple Slicing</h3>
                    <p>You can access a range of items in a tuple by using slicing.</p>
                    <pre>
                        <code id="slice-tuple-code">
{`print(fruits[1:3])  # Output: ('banana', 'cherry')`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Tuple Immutability</h3>
                    <p>Once a tuple is created, you cannot change its items. Tuples are immutable.</p>
                    <pre>
                        <code id="immutable-tuple-code">
{`# Trying to change the value will result in an error
# fruits[1] = "blueberry"  # This will raise a TypeError`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/pythonlists" className="btn btn-primary">Previous Page: Lists</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/pythonsets" className="btn btn-primary">Next Page: Set</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonTuples;
