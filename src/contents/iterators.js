import React from 'react';
import { Link } from 'react-router-dom';

const PythonIteratorsHandling = () => {
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
                    <h1 className="display-4 text-primary">Python Iterators</h1>
                    <p className="lead">In Python, iterators are objects that allow you to traverse through all the elements in a collection, such as lists or tuples, without needing to know the underlying structure.</p>
                </div>
                <div className="mt-4">
                    <h3>What is an Iterator?</h3>
                    <p>An iterator is an object that implements two methods:</p>
                    <ul>
                        <li><code>__iter__()</code>: Returns the iterator object itself. This is required for an object to be an iterator.</li>
                        <li><code>__next__()</code>: Returns the next value from the iterator. When there are no more items, it raises a <code>StopIteration</code> exception.</li>
                    </ul>
                    <p>Iterators are used in loops, such as <code>for</code> loops, to iterate through items one by one.</p>

                    <h3>Creating an Iterator</h3>
                    <p>Here’s a simple example of creating an iterator class:</p>
                    <pre>
                        <code id="iterator-class-code">
{`class Counter:
    def __init__(self, low, high):
        self.current = low
        self.high = high

    def __iter__(self):
        return self

    def __next__(self):
        if self.current > self.high:
            raise StopIteration
        else:
            self.current += 1
            return self.current - 1

# Example usage
counter = Counter(3, 8)
for num in counter:
    print(num)  # Output: 3, 4, 5, 6, 7, 8`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>Counter</code> class is an iterator that counts from a given <code>low</code> value to a <code>high</code> value. The <code>__iter__()</code> method returns the iterator object itself, and the <code>__next__()</code> method returns the next number, incrementing each time until the <code>high</code> value is reached.</p>

                    <h3>Using Iterators with Built-in Functions</h3>
                    <p>Python’s built-in functions like <code>map</code>, <code>filter</code>, and <code>zip</code> work with iterators. Here are examples of using these functions with iterators:</p>
                    
                    <h4>Example with <code>map()</code></h4>
                    <pre>
                        <code id="map-iterator-code">
{`numbers = [1, 2, 3, 4, 5]

# Using map with a lambda function
squared_numbers = map(lambda x: x ** 2, numbers)

print(list(squared_numbers))  # Output: [1, 4, 9, 16, 25]`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>map()</code> function applies the lambda function to each item in the <code>numbers</code> list. The result is an iterator of squared numbers.</p>

                    <h4>Example with <code>filter()</code></h4>
                    <pre>
                        <code id="filter-iterator-code">
{`numbers = [1, 2, 3, 4, 5, 6]

# Using filter with a lambda function
even_numbers = filter(lambda x: x % 2 == 0, numbers)

print(list(even_numbers))  # Output: [2, 4, 6]`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>filter()</code> function uses the lambda function to filter out odd numbers from the list, resulting in an iterator of even numbers.</p>

                    <h4>Example with <code>zip()</code></h4>
                    <pre>
                        <code id="zip-iterator-code">
{`names = ['Alice', 'Bob', 'Charlie']
scores = [85, 90, 78]

# Using zip to combine lists
combined = zip(names, scores)

print(list(combined))  # Output: [('Alice', 85), ('Bob', 90), ('Charlie', 78)]`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>zip()</code> function combines the <code>names</code> and <code>scores</code> lists into an iterator of tuples, each containing one item from each list.</p>

                    <h3>Generators as Iterators</h3>
                    <p>Generators are a convenient way to create iterators without defining a class. They use the <code>yield</code> keyword to produce a sequence of values over time:</p>
                    <pre>
                        <code id="generator-code">
{`def count_up_to(max):
    count = 1
    while count <= max:
        yield count
        count += 1

# Example usage
for num in count_up_to(5):
    print(num)  # Output: 1, 2, 3, 4, 5`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>count_up_to</code> function is a generator that yields numbers from 1 up to a given maximum. Each time <code>yield</code> is called, the function produces the next value and pauses, resuming where it left off when called again.</p>

                    <h3>When to Use Iterators</h3>
                    <p>Iterators are useful when working with large datasets or streams of data, as they allow you to process elements one at a time, which is more memory efficient. They are also useful for creating custom iteration patterns or sequences in a concise and readable way.</p>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/lambda-functions" className="btn btn-primary">Previous Page: Lambda Functions</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/context-managers" className="btn btn-primary">Next Page: Context Managers</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonIteratorsHandling;
