import React from 'react';

const ConditionalStatements = () => {
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
                    <h1 className="display-4 text-primary">Python Conditional Statements</h1>
                    <p className="lead">Conditional statements are used to perform different actions based on different conditions. Python supports several conditional statements like <code>if</code>, <code>elif</code>, and <code>else</code>.</p>
                </div>
                <div className="mt-4">
                    <h3>If Statements</h3>
                    <p>An <code>if</code> statement is used to execute a block of code only if a specified condition is true.</p>
                    <pre>
                        <code id="if-code">
{`x = 10
if x > 5:
    print("x is greater than 5")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Else Statements</h3>
                    <p>The <code>else</code> statement allows you to execute a block of code if the condition in the <code>if</code> statement is false.</p>
                    <pre>
                        <code id="else-code">
{`x = 3
if x > 5:
    print("x is greater than 5")
else:
    print("x is not greater than 5")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Elif Statements</h3>
                    <p>The <code>elif</code> statement allows you to check multiple conditions. It is short for "else if".</p>
                    <pre>
                        <code id="elif-code">
{`x = 5
if x > 5:
    print("x is greater than 5")
elif x == 5:
    print("x is equal to 5")
else:
    print("x is less than 5")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Nested If Statements</h3>
                    <p>You can use nested <code>if</code> statements to check multiple conditions inside other <code>if</code> statements.</p>
                    <pre>
                        <code id="nested-if-code">
{`x = 10
if x > 5:
    print("x is greater than 5")
    if x > 8:
        print("x is also greater than 8")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Short Hand If</h3>
                    <p>Python allows you to write <code>if</code> statements in a single line.</p>
                    <pre>
                        <code id="shorthand-if-code">
{`x = 10
if x > 5: print("x is greater than 5")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Short Hand If Else</h3>
                    <p>You can also write <code>if</code> and <code>else</code> statements in one line using shorthand syntax.</p>
                    <pre>
                        <code id="shorthand-if-else-code">
{`x = 10
print("x is greater than 5") if x > 5 else print("x is not greater than 5")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Logical Operators with If</h3>
                    <p>You can combine multiple conditions using logical operators like <code>and</code> and <code>or</code>.</p>
                    <pre>
                        <code id="logical-operators-code">
{`x = 10
y = 20
if x > 5 and y > 15:
    print("Both conditions are True")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ConditionalStatements;
