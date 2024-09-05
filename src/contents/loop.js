import React from 'react';

const Loops = () => {
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
                    <h1 className="display-4 text-primary">Python Loops</h1>
                    <p className="lead">Loops are used to repeat a block of code multiple times. Python provides two types of loops: <code>for</code> and <code>while</code>.</p>
                </div>
                <div className="mt-4">
                    <h3>For Loop</h3>
                    <p>The <code>for</code> loop is used to iterate over a sequence (like a list, tuple, or string) and execute a block of code for each item.</p>
                    <pre>
                        <code id="for-loop-code">
{`fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>While Loop</h3>
                    <p>The <code>while</code> loop continues to execute a block of code as long as the specified condition is true.</p>
                    <pre>
                        <code id="while-loop-code">
{`i = 1
while i < 6:
    print(i)
    i += 1`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Break Statement</h3>
                    <p>The <code>break</code> statement is used to exit the loop prematurely when a specific condition is met.</p>
                    <pre>
                        <code id="break-statement-code">
{`for i in range(10):
    if i == 5:
        break
    print(i)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Continue Statement</h3>
                    <p>The <code>continue</code> statement skips the rest of the code inside the loop for the current iteration and moves to the next iteration.</p>
                    <pre>
                        <code id="continue-statement-code">
{`for i in range(5):
    if i == 3:
        continue
    print(i)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Else in Loops</h3>
                    <p>You can add an <code>else</code> block to a loop, which will be executed once when the loop completes normally (i.e., not interrupted by <code>break</code>).</p>
                    <pre>
                        <code id="else-in-loops-code">
{`for i in range(5):
    print(i)
else:
    print("Loop completed!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Nested Loops</h3>
                    <p>You can place one loop inside another loop, known as nested loops.</p>
                    <pre>
                        <code id="nested-loops-code">
{`for i in range(1, 4):
    for j in range(1, 4):
        print(f"i={i}, j={j}")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>

                    <h3>Looping Through a Dictionary</h3>
                    <p>You can loop through a dictionary to get both keys and values.</p>
                    <pre>
                        <code id="dictionary-loop-code">
{`person = {'name': 'Alice', 'age': 25}
for key, value in person.items():
    print(f"{key}: {value}")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Loops;
