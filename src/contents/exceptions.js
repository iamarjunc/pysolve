import React from 'react';
import { Link } from 'react-router-dom';

const PythonExceptions = () => {
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
                    <h1 className="display-4 text-primary">Python Exceptions</h1>
                    <p className="lead">Exceptions are used to handle errors or unexpected situations that occur during the execution of a program. They provide a way to manage errors gracefully and ensure the program can handle them without crashing.</p>
                </div>
                <div className="mt-4">
                    <h3>Introduction to Exceptions</h3>
                    <p>In Python, exceptions are errors that occur during the execution of a program. When an error occurs, Python stops the normal flow of the program and looks for a block of code to handle the error. This block of code is known as an exception handler.</p>

                    <h3>Basic Exception Handling</h3>
                    <p>The `try` and `except` blocks are used to handle exceptions. Code that might cause an exception is placed inside the `try` block, and the handling code is placed inside the `except` block.</p>
                    <pre>
                        <code id="basic-exception-handling-code">
{`try:
    num = int(input("Enter a number: "))
    print(10 / num)
except ZeroDivisionError:
    print("You can't divide by zero!")
except ValueError:
    print("Invalid input! Please enter a number."}`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `try` block contains code that might raise an exception. If a `ZeroDivisionError` or `ValueError` occurs, the corresponding `except` block will handle it. The program will not crash but instead will display an appropriate error message.</p>

                    <h3>Handling Multiple Exceptions</h3>
                    <p>You can handle multiple exceptions in different `except` blocks. Each `except` block handles a specific type of exception.</p>
                    <pre>
                        <code id="multiple-exceptions-code">
{`try:
    num = int(input("Enter a number: "))
    print(10 / num)
except (ZeroDivisionError, ValueError) as e:
    print(f"Error: {e}")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> Here, both `ZeroDivisionError` and `ValueError` are handled by a single `except` block. The variable `e` holds the exception message, which is displayed using an f-string.</p>

                    <h3>Using `else` and `finally` Blocks</h3>
                    <p>The `else` block is executed if no exceptions occur in the `try` block. The `finally` block is always executed, regardless of whether an exception occurred or not.</p>
                    <pre>
                        <code id="else-finally-code">
{`try:
    num = int(input("Enter a number: "))
    result = 10 / num
except ZeroDivisionError:
    print("You can't divide by zero!")
except ValueError:
    print("Invalid input! Please enter a number.")
else:
    print(f"The result is {result}")
finally:
    print("Execution complete.")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `else` block runs if no exceptions occur, showing the result of the division. The `finally` block always runs, displaying "Execution complete" regardless of whether an exception occurred.</p>

                    <h3>Raising Exceptions</h3>
                    <p>You can manually raise exceptions using the `raise` keyword. This is useful for creating custom error conditions or re-raising exceptions.</p>
                    <pre>
                        <code id="raising-exceptions-code">
{`def divide(x, y):
    if y == 0:
        raise ValueError("The denominator cannot be zero!")
    return x / y

try:
    result = divide(10, 0)
except ValueError as e:
    print(e)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `raise` statement is used to manually raise a `ValueError` if the denominator is zero. The exception is caught and handled in the `except` block, printing the error message.</p>

                    <h3>Creating Custom Exceptions</h3>
                    <p>You can create your own exceptions by subclassing the `Exception` class. Custom exceptions provide more specific error handling.</p>
                    <pre>
                        <code id="custom-exceptions-code">
{`class CustomError(Exception):
    pass

def check_value(value):
    if value < 0:
        raise CustomError("Negative values are not allowed.")

try:
    check_value(-1)
except CustomError as e:
    print(e)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> `CustomError` is a user-defined exception class. The `check_value` function raises a `CustomError` if the value is negative. The `except` block catches and handles the custom exception.</p>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/modules" className="btn btn-primary">Previous Page: Modules</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/file-handling" className="btn btn-primary">Next Page: File Handling</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonExceptions;
