import React from 'react';
import { Link } from 'react-router-dom';
const Operators = () => {
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
                    <h1 className="display-4 text-primary">Python Operators</h1>
                    <p className="lead">Operators are used to perform operations on variables and values. Python supports a variety of operators for different operations.</p>
                </div>
                <div className="mt-4">
                    <h3>Arithmetic Operators</h3>
                    <p>Arithmetic operators are used to perform common mathematical operations.</p>
                    
                    <h4>1. Addition</h4>
                    <p>Adds two numbers.</p>
                    <pre>
                        <code id="addition-code">result = 10 + 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>2. Subtraction</h4>
                    <p>Subtracts one number from another.</p>
                    <pre>
                        <code id="subtraction-code">result = 10 - 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>3. Multiplication</h4>
                    <p>Multiplies two numbers.</p>
                    <pre>
                        <code id="multiplication-code">result = 10 * 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>4. Division</h4>
                    <p>Divides one number by another.</p>
                    <pre>
                        <code id="division-code">result = 10 / 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>5. Modulus</h4>
                    <p>Returns the remainder of a division.</p>
                    <pre>
                        <code id="modulus-code">result = 10 % 3</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>6. Exponentiation</h4>
                    <p>Raises one number to the power of another.</p>
                    <pre>
                        <code id="exponentiation-code">result = 2 ** 3</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>7. Floor Division</h4>
                    <p>Divides and rounds down to the nearest whole number.</p>
                    <pre>
                        <code id="floor-division-code">result = 10 // 3</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>
                <br />
                <div className="mt-4">
                    <h3>Comparison Operators</h3>
                    <p>Comparison operators are used to compare two values.</p>
                    
                    <h4>1. Equal</h4>
                    <p>Checks if two values are equal.</p>
                    <pre>
                        <code id="equal-code">result = 10 == 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>2. Not Equal</h4>
                    <p>Checks if two values are not equal.</p>
                    <pre>
                        <code id="not-equal-code">result = 10 != 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>3. Greater Than</h4>
                    <p>Checks if one value is greater than another.</p>
                    <pre>
                        <code id="greater-than-code">result = 10 &gt; 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>4. Less Than</h4>
                    <p>Checks if one value is less than another.</p>
                    <pre>
                        <code id="less-than-code">result = 10 &lt; 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>5. Greater Than or Equal</h4>
                    <p>Checks if one value is greater than or equal to another.</p>
                    <pre>
                        <code id="greater-equal-code">result = 10 &gt;= 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h4>6. Less Than or Equal</h4>
                    <p>Checks if one value is less than or equal to another.</p>
                    <pre>
                        <code id="less-equal-code">result = 10 &lt;= 5</code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>
                
        <div className="d-flex justify-content-between">
            <div className="mt-4">
                <Link to="/boolean" className="btn btn-primary">Previous Page: Boolean</Link>
            </div>
            <div className="mt-4">
                <Link to="/conditionstatement" className="btn btn-primary">Next Page: Condition Statement</Link>
            </div>
        </div>
            </div>
        </div>
    );
};

export default Operators;
