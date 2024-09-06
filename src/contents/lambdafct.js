import React from 'react';
import { Link } from 'react-router-dom';

const PythonLambdaHandling = () => {
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
                    <h1 className="display-4 text-primary">Python Lambda Functions</h1>
                    <p className="lead">Lambda functions in Python are small anonymous functions defined with the <code>lambda</code> keyword. They are useful for short, throwaway functions that you don’t want to name.</p>
                </div>
                <div className="mt-4">
                    <h3>What is a Lambda Function?</h3>
                    <p>A lambda function is a compact way of writing small functions without using a formal <code>def</code> statement. Lambda functions are often used when a function is needed temporarily for a short period of time.</p>

                    <h3>Basic Syntax</h3>
                    <p>The syntax for a lambda function is:</p>
                    <pre>
                        <code id="basic-lambda-syntax-code">
{`lambda arguments: expression`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>lambda</code> keyword is followed by the function arguments and a single expression. Unlike regular functions, lambda functions can only contain a single expression, which is evaluated and returned.</p>

                    <h3>Simple Lambda Function</h3>
                    <p>Here's a simple lambda function that adds two numbers:</p>
                    <pre>
                        <code id="simple-lambda-code">
{`add = lambda x, y: x + y

# Example usage
result = add(5, 3)
print(result)  # Output: 8`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The lambda function <code>add</code> takes two arguments <code>x</code> and <code>y</code>, and returns their sum. This function can be used in the same way as a regular function.</p>

                    <h3>Lambda Function in Sorting</h3>
                    <p>Lambda functions are often used with functions like <code>sorted</code> to provide a custom sort order. Here’s an example of sorting a list of tuples based on the second element:</p>
                    <pre>
                        <code id="lambda-sorting-code">
{`data = [(1, 'apple'), (3, 'banana'), (2, 'cherry')]

# Sorting by the second element of each tuple
sorted_data = sorted(data, key=lambda x: x[1])

print(sorted_data)  # Output: [(1, 'apple'), (3, 'banana'), (2, 'cherry')]`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The lambda function <code>lambda x: x[1]</code> is used as the key for sorting. It extracts the second element from each tuple, which is used to determine the order of sorting.</p>

                    <h3>Lambda Function in Map</h3>
                    <p>Lambda functions can also be used with <code>map</code> to apply a function to each item in an iterable. Here’s an example of using <code>map</code> to square each number in a list:</p>
                    <pre>
                        <code id="lambda-map-code">
{`numbers = [1, 2, 3, 4, 5]

# Applying lambda function to square each number
squared_numbers = map(lambda x: x ** 2, numbers)

print(list(squared_numbers))  # Output: [1, 4, 9, 16, 25]`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The lambda function <code>lambda x: x ** 2</code> squares each element of the list <code>numbers</code>. The <code>map</code> function applies this lambda to each element and returns an iterator of squared numbers.</p>

                    <h3>Lambda Function in Filter</h3>
                    <p>Lambda functions are also used with <code>filter</code> to filter items in an iterable. Here’s an example of using <code>filter</code> to keep only even numbers from a list:</p>
                    <pre>
                        <code id="lambda-filter-code">
{`numbers = [1, 2, 3, 4, 5, 6]

# Filtering out odd numbers
even_numbers = filter(lambda x: x % 2 == 0, numbers)

print(list(even_numbers))  # Output: [2, 4, 6]`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The lambda function <code>lambda x: x % 2 == 0</code> checks if a number is even. The <code>filter</code> function applies this lambda to each element of the list and returns an iterator of even numbers.</p>

                    <h3>Lambda Function in Reduce</h3>
                    <p>Lambda functions can also be used with <code>functools.reduce</code> to perform a cumulative operation on a list. Here’s an example of calculating the product of all numbers in a list:</p>
                    <pre>
                        <code id="lambda-reduce-code">
{`from functools import reduce

numbers = [1, 2, 3, 4, 5]

# Reducing to the product of all numbers
product = reduce(lambda x, y: x * y, numbers)

print(product)  # Output: 120`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The lambda function <code>lambda x, y: x * y</code> multiplies two numbers. The <code>reduce</code> function applies this lambda cumulatively to the items of the list, resulting in the product of all numbers.</p>

                    <h3>Lambda Functions in Sorting Complex Data</h3>
                    <p>Lambda functions can also be used to sort complex data structures. Here’s an example of sorting a list of dictionaries by a specific key:</p>
                    <pre>
                        <code id="lambda-complex-sorting-code">
{`data = [
    {'name': 'John', 'age': 25},
    {'name': 'Jane', 'age': 22},
    {'name': 'Doe', 'age': 30}
]

# Sorting by 'age'
sorted_data = sorted(data, key=lambda x: x['age'])

print(sorted_data)  # Output: [{'name': 'Jane', 'age': 22}, {'name': 'John', 'age': 25}, {'name': 'Doe', 'age': 30}]`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The lambda function <code>lambda x: x['age']</code> extracts the 'age' value from each dictionary. The <code>sorted</code> function uses this lambda to sort the list of dictionaries by age.</p>

                    <h3>When to Use Lambda Functions</h3>
                    <p>Lambda functions are ideal for short-term use cases where you need a small, unnamed function. They are commonly used in functional programming contexts and can make code more concise and readable.</p>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/decorators" className="btn btn-primary">Previous Page: Decorators</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/iterators" className="btn btn-primary">Next Page: Iterators</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonLambdaHandling;
