import React from 'react';
import { Link } from 'react-router-dom';
const Boolean = () => {
    // Function to handle code copy
    const copyCode = (btn) => {
        // Find the <code> block related to the clicked button
        const codeBlock = btn.closest('pre').querySelector('code');
    
        if (codeBlock) {
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
        } else {
            alert('Failed to find code block.');
        }
    };
    

    return (
        <div>
            <div className="content">
        <h1>Python Booleans</h1>
        <p>Booleans represent one of two values: <code>True</code> or <code>False</code>. They are used in conditional statements and to evaluate expressions.</p>

        <div className="mt-4">
            <h3>Boolean Values</h3>
            <pre><code className="language-python">is_active = True<br/>is_logged_in = False</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
        </div>

        <div className="mt-4">
            <h3>Logical Operators</h3>
            <p>Logical operators are used to combine conditional statements:</p>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>and:</strong> Returns <code>True</code> if both statements are true.
                    <pre><code className="language-python">is_logged_in = True<br/>is_active = True<br/>print(is_logged_in and is_active)  # Output: True</code>
 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
                </li>
                <li className="list-group-item">
                    <strong>or:</strong> Returns <code>True</code> if one of the statements is true.<br/>
                    <pre><code className="language-python">is_logged_in = True<br/>is_active = False<br/>print(is_logged_in or is_active)  # Output: True</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
                </li>
                <li className="list-group-item">
                    <strong>not:</strong> Reverses the result, returns <code>False</code> if the result is true.
                    <pre><code className="language-python">is_logged_in = True<br/>print(not is_logged_in)  # Output: False</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
                </li>
            </ul>
        </div>

        <div className="mt-4">
            <h3>Comparison Operators</h3>
            <p>Comparison operators compare two values and return a Boolean value:</p>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>== :</strong> Equal to
                    <pre><code className="language-python">a = 10<br/>b = 10<br/>print(a == b)  # Output: True</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
                </li>
                <li className="list-group-item">
                    <strong>!= :</strong> Not equal to
                    <pre><code className="language-python">a = 10<br/>b = 20<br/>print(a != b)  # Output: True</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
                </li>
                <li className="list-group-item">
                    <strong>&gt; :</strong> Greater than
                    <pre><code className="language-python">a = 20<br/>b = 10<br/>print(a &lt; b)  # Output: True</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
                </li>
                <li className="list-group-item">
                    <strong>&lt; :</strong> Less than
                    <pre><code className="language-python">a = 5<br/>b = 10<br/>print(a &gt; b)  # Output: True</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
                </li>
                <li className="list-group-item">
                    <strong>&gt;= :</strong> Greater than or equal to
                    <pre><code className="language-python">a = 10<br/>b = 10<br/>print(a &gt;= b)  # Output: True</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
                </li>
                <li className="list-group-item">
                    <strong>&lt;= :</strong> Less than or equal to
                    <pre><code className="language-python">a = 10<br/>b = 20<br/>print(a &lt;= b)  # Output: True</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
                </li>
            </ul>
        </div>

        <div className="mt-4">
            <h3>Boolean Conversion</h3>
            <p>In Python, you can convert any value to a Boolean using the <code>bool()</code> function. The following values are considered <code>False</code>:</p>
            <ul className="list-group">
                <li className="list-group-item">Any numeric value equal to <code>0</code></li>
                <li className="list-group-item">An empty string <code>""</code></li>
                <li className="list-group-item">An empty list <code>[]</code>, tuple <code>()</code>, set <code>{}</code>, or dictionary <code>{}</code></li>
                <li className="list-group-item">The <code>None</code> value</li>
            </ul>
            <pre><code className="language-python">print(bool(0))      # Output: False<br/>print(bool(""))     # Output: False<br/>print(bool([]))     # Output: False<br/>print(bool(None))   # Output: False</code>

 <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button></pre>
        </div>
        
        <div className="d-flex justify-content-between">
            <div className="mt-4">
                <Link to="/strings" className="btn btn-primary">Previous Page: Strings</Link>
            </div>
            <div className="mt-4">
                <Link to="/operators" className="btn btn-primary">Next Page: Operators</Link>
            </div>
        </div>
    </div>
    
        </div>
    );
};

export default Boolean;
