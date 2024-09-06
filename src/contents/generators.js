import React from 'react';
import { Link } from 'react-router-dom';

const PythonGeneratorsHandling = () => {
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
                    <h1 className="display-4 text-primary">Python Generators</h1>
                    <p className="lead">Generators are a way to create iterators in Python using a simpler syntax. They allow you to iterate over data without storing the entire dataset in memory. This can be particularly useful for working with large datasets or streams of data.</p>
                </div>
                <div className="mt-4">
                    <h3>What is a Generator?</h3>
                    <p>A generator is a special type of iterator that allows you to iterate over a sequence of values. Instead of storing all the values in memory, a generator produces values on-the-fly.</p>
                    
                    <h3>Creating a Generator Function</h3>
                    <p>Generator functions use the <code>yield</code> keyword to produce values one at a time. Here's a simple example of a generator function:</p>
                    <pre>
                        <code id="simple-generator-code">
{`def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

# Example usage
for number in count_up_to(5):
    print(number)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>count_up_to</code> generator function yields numbers from 1 up to a specified maximum. Each call to the generator produces the next number in the sequence. When iterated over, it prints numbers from 1 to 5.</p>

                    <h3>Using Generators with `next()`</h3>
                    <p>You can manually retrieve values from a generator using the <code>next()</code> function. This is useful for controlling the flow of data manually:</p>
                    <pre>
                        <code id="next-generator-code">
{`def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

# Example usage
gen = count_up_to(3)
print(next(gen))  # Outputs: 1
print(next(gen))  # Outputs: 2
print(next(gen))  # Outputs: 3
print(next(gen))  # Raises StopIteration`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>next()</code> function retrieves the next value from the generator. Once the generator is exhausted, calling <code>next()</code> raises a <code>StopIteration</code> exception.</p>

                    <h3>Generator Expressions</h3>
                    <p>Generator expressions provide a concise way to create generators. They are similar to list comprehensions but use parentheses instead of square brackets:</p>
                    <pre>
                        <code id="gen-expression-code">
{`squares = (x*x for x in range(1, 6))
for square in squares:
    print(square)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The generator expression <code>(x*x for x in range(1, 6))</code> generates squares of numbers from 1 to 5. Each square is produced one at a time when iterated over.</p>

                    <h3>Advantages of Generators</h3>
                    <p>Generators have several advantages:</p>
                    <ul>
                        <li><strong>Memory Efficiency:</strong> Generators produce values one at a time and do not store them in memory, which is useful for large datasets.</li>
                        <li><strong>Lazy Evaluation:</strong> Values are generated only when needed, making generators efficient for processing large or infinite sequences.</li>
                        <li><strong>Improved Performance:</strong> Generators can improve performance by avoiding the overhead of storing and managing large lists.</li>
                    </ul>

                    <h3>Handling Generator State</h3>
                    <p>Generators can maintain state between yields, which can be useful for complex data generation:</p>
                    <pre>
                        <code id="generator-state-code">
{`def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Example usage
fib = fibonacci()
for _ in range(10):
    print(next(fib))`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>fibonacci</code> generator produces numbers in the Fibonacci sequence. Each call to <code>next()</code> yields the next number in the sequence, maintaining state between yields.</p>

                    <h3>Handling Generator Exceptions</h3>
                    <p>You can handle exceptions within a generator to manage errors during iteration:</p>
                    <pre>
                        <code id="generator-exception-code">
{`def safe_divide(divisor):
    while True:
        try:
            dividend = yield
            result = dividend / divisor
            print(result)
        except ZeroDivisionError:
            print("Cannot divide by zero")

# Example usage
gen = safe_divide(2)
next(gen)  # Prime the generator
gen.send(10)  # Outputs: 5.0
gen.send(20)  # Outputs: 10.0
gen.send(0)   # Outputs: Cannot divide by zero`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>safe_divide</code> generator handles division by zero errors. It uses <code>send()</code> to send values into the generator and handle exceptions using a <code>try</code>-<code>except</code> block.</p>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/regular-expressions" className="btn btn-primary">Previous Page: Regular Expressions</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/decorators" className="btn btn-primary">Next Page: Decorators</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonGeneratorsHandling;
