import React from 'react';
import { Link } from 'react-router-dom';

const PythonDecoratorsHandling = () => {
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
                    <h1 className="display-4 text-primary">Python Decorators</h1>
                    <p className="lead">Decorators in Python are a powerful tool that allows you to modify the behavior of functions or methods. They provide a way to add functionality to an existing codebase in a clean and reusable manner.</p>
                </div>
                <div className="mt-4">
                    <h3>What is a Decorator?</h3>
                    <p>A decorator is a function that takes another function and extends its behavior without explicitly modifying it. Decorators are commonly used to add functionality such as logging, access control, or memoization.</p>
                    
                    <h3>Creating a Basic Decorator</h3>
                    <p>Here's how you can create a simple decorator that prints a message before and after the execution of a function:</p>
                    <pre>
                        <code id="basic-decorator-code">
{`def my_decorator(func):
    def wrapper():
        print("Something is happening before the function is called.")
        func()
        print("Something is happening after the function is called.")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

# Example usage
say_hello()`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>my_decorator</code> function takes a function <code>func</code> as an argument, wraps it with additional behavior, and returns the wrapper function. The <code>@my_decorator</code> syntax is a decorator syntax that applies the decorator to the <code>say_hello</code> function.</p>

                    <h3>Decorator with Arguments</h3>
                    <p>Decorators can also take arguments. Here’s an example of a decorator that takes an argument to customize its behavior:</p>
                    <pre>
                        <code id="decorator-args-code">
{`def repeat_decorator(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                func(*args, **kwargs)
        return wrapper
    return decorator

@repeat_decorator(3)
def greet(name):
    print(f"Hello, {name}!")

# Example usage
greet("Alice")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>repeat_decorator</code> takes an argument <code>times</code>, and the inner <code>decorator</code> function defines the actual decorator logic. The <code>wrapper</code> function calls the decorated function <code>times</code> times.</p>

                    <h3>Using Decorators with Functions that Take Arguments</h3>
                    <p>Decorators can also be used with functions that take arguments. Here’s an example:</p>
                    <pre>
                        <code id="func-args-decorator-code">
{`def log_decorator(func):
    def wrapper(*args, **kwargs):
        print(f"Function {func.__name__} was called with arguments: {args} and keyword arguments: {kwargs}")
        return func(*args, **kwargs)
    return wrapper

@log_decorator
def add(a, b):
    return a + b

# Example usage
result = add(5, 3)
print(result)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>log_decorator</code> logs the arguments passed to the decorated function before calling it. The <code>*args</code> and <code>**kwargs</code> syntax allows the decorator to handle functions with varying arguments.</p>

                    <h3>Chaining Decorators</h3>
                    <p>Multiple decorators can be applied to a single function. They are applied from the innermost to the outermost:</p>
                    <pre>
                        <code id="chaining-decorators-code">
{`def bold_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return f"**{result}**"
    return wrapper

def italic_decorator(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return f"_{result}_"
    return wrapper

@bold_decorator
@italic_decorator
def get_message():
    return "Hello"

# Example usage
print(get_message())`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>bold_decorator</code> and <code>italic_decorator</code> are chained to format the output of <code>get_message</code>. The decorators are applied in the order they are listed, resulting in a message wrapped in both bold and italic formatting.</p>

                    <h3>Class Decorators</h3>
                    <p>Decorators can also be used with classes. Here’s an example of a class decorator that modifies the behavior of a class:</p>
                    <pre>
                        <code id="class-decorator-code">
{`def add_method_decorator(cls):
    cls.new_method = lambda self: "This is a new method!"
    return cls

@add_method_decorator
class MyClass:
    def original_method(self):
        return "This is the original method."

# Example usage
obj = MyClass()
print(obj.original_method())
print(obj.new_method())`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>add_method_decorator</code> adds a new method to the class <code>MyClass</code>. After applying the decorator, instances of <code>MyClass</code> have both the original and the new method.</p>

                    <h3>Decorator with `functools.wraps`</h3>
                    <p>When writing decorators, it’s good practice to use <code>functools.wraps</code> to ensure the decorated function retains its original metadata:</p>
                    <pre>
                        <code id="functools-wraps-code">
{`from functools import wraps

def decorator_with_metadata(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print("Function is being called.")
        return func(*args, **kwargs)
    return wrapper

@decorator_with_metadata
def sample_function():
    """This is a sample function."""
    return "Sample result."

# Example usage
print(sample_function.__name__)
print(sample_function.__doc__)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> Using <code>wraps</code> from <code>functools</code> ensures that <code>sample_function</code> retains its original <code>__name__</code> and <code>__doc__</code> attributes, even after decoration.</p>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/generators" className="btn btn-primary">Previous Page: Generators</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/lambda-functions" className="btn btn-primary">Next Page: Lambda Functions</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonDecoratorsHandling;
