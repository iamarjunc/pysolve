import React from 'react';
import { Link } from 'react-router-dom';
const Strings = () => {
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
        <h1>Python Strings</h1>
        <p>Strings in Python are used to store text data. They are defined by enclosing characters in quotes.</p>

        <div className="mt-4">
            <h3>String Basics</h3>
            <pre><code className="language-python">greeting = "Hello, World!"<br/><br/># String with single quotes<br/>message = 'Python is awesome!'</code>
<button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>

</pre>
        </div>

        <div className="mt-4">
            <h3>String Concatenation</h3>
            <p>Strings can be concatenated using the <code>+</code> operator:</p>
            <pre><code className="language-python">first_name = "John"<br/>last_name = "Doe"<br/><br/>full_name = first_name + " " + last_name<br/>print(full_name)  # Output: John Doe</code>
<button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
        </div>

        <div className="mt-4">
            <h3>String Slicing</h3>
            <p>You can access parts of a string using slicing:</p>
            <pre><code className="language-python">text = "Hello, World!"<br/>print(text[0:5])   # Output: Hello<br/>print(text[7:12])  # Output: World</code>
<button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>

</pre>
        </div>

        <div className="mt-4">
            <h3>Common String Methods</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>lower():</strong> Converts all characters to lowercase.
                    <pre><code className="language-python">text = "Hello, World!"<br/>print(text.lower())  # Output: hello, world!</code>
<button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
                </li>
                <li className="list-group-item">
                    <strong>upper():</strong> Converts all characters to uppercase.
                    <pre><code className="language-python">text = "Hello, World!"<br/>print(text.upper())  # Output: HELLO, WORLD!</code>
<button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
                </li>
                <li className="list-group-item">
                    <strong>strip():</strong> Removes leading and trailing whitespace.
                    <pre><code className="language-python">text = "  Hello, World!  "<br/>print(text.strip())  # Output: Hello, World!</code>
<button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
                </li>
                <li className="list-group-item">
                    <strong>replace():</strong> Replaces a substring with another string.
                    <pre><code className="language-python">text = "Hello, World!"<br/>print(text.replace("World", "Python"))  # Output: Hello, Python!</code>
<button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
                </li>
                <li className="list-group-item">
                    <strong>split():</strong> Splits a string into a list of substrings.
                    <pre><code className="language-python">text = "Hello, World!"<br/>words = text.split(", ")
print(words)  # Output: ['Hello', 'World!']</code>
<button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
                </li>
            </ul>
        </div>
        
        <div className="d-flex justify-content-between">
            <div className="mt-4">
                <Link to="/type-casting" className="btn btn-primary">Previous Page: Type Casting</Link>
            </div>
            <div className="mt-4">
                <Link to="/boolean" className="btn btn-primary">Next Page: Boolean</Link>
            </div>
        </div>
    </div>

        </div>
    );
};

export default Strings;
