import React from 'react';
import { Link } from 'react-router-dom';

const PythonPolymorphism = () => {
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
                    <h1 className="display-4 text-primary">Python Polymorphism</h1>
                    <p className="lead">Polymorphism allows objects of different classes to be treated as objects of a common base class. It is a core concept in object-oriented programming that enables a single function or method to operate differently depending on the object it is acting upon.</p>
                </div>
                <div className="mt-4">
                    <h3>Introduction to Polymorphism</h3>
                    <p>Polymorphism can be achieved through method overriding and method overloading. In Python, method overriding is commonly used, while method overloading is not directly supported but can be mimicked using default arguments or variable arguments.</p>

                    <h3>Method Overriding</h3>
                    <p>Method overriding allows a subclass to provide a specific implementation of a method that is already defined in its superclass.</p>
                    <pre>
                        <code id="method-overriding-code">
{`class Animal:
    def speak(self):
        print("Animal speaks")

class Dog(Animal):
    def speak(self):
        print("Dog barks")

class Cat(Animal):
    def speak(self):
        print("Cat meows")

def make_animal_speak(animal):
    animal.speak()

# Example usage
make_animal_speak(Dog())  # Output: Dog barks
make_animal_speak(Cat())  # Output: Cat meows`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> In this example, the `speak` method in the `Animal` class is overridden by the `Dog` and `Cat` classes. The `make_animal_speak` function demonstrates polymorphism by calling the `speak` method on different objects (a `Dog` and a `Cat`). The appropriate `speak` method is called based on the object type, illustrating how the same method name can have different implementations in different classes.</p>

                    <h3>Method Overloading (Simulated)</h3>
                    <p>Python does not support method overloading directly, but you can use default arguments or variable-length arguments to achieve similar functionality.</p>
                    <pre>
                        <code id="method-overloading-code">
{`class MathOperations:
    def add(self, a, b, c=0):
        return a + b + c

math = MathOperations()
print(math.add(2, 3))       # Output: 5
print(math.add(2, 3, 4))    # Output: 9`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `add` method in the `MathOperations` class can handle two or three arguments due to the default value of `c`. This simulates method overloading by allowing the same method to perform different tasks based on the number of arguments.</p>

                    <h3>Polymorphism with Abstract Base Classes</h3>
                    <p>Abstract Base Classes (ABCs) provide a way to define common interfaces for a group of related classes. ABCs can enforce that derived classes implement certain methods.</p>
                    <pre>
                        <code id="abstract-base-class-code">
{`from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2

class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

def print_area(shape):
    print("Area:", shape.area())

# Example usage
print_area(Circle(5))      # Output: Area: 78.5
print_area(Rectangle(4, 6)) # Output: Area: 24`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `Shape` class is an abstract base class with an abstract method `area`. The `Circle` and `Rectangle` classes inherit from `Shape` and implement the `area` method. The `print_area` function demonstrates polymorphism by accepting any `Shape` object and calling its `area` method, regardless of the specific shape type.</p>

                    <h3>Operator Overloading</h3>
                    <p>Operator overloading allows you to define custom behavior for standard operators (e.g., +, -, *) in your classes.</p>
                    <pre>
                        <code id="operator-overloading-code">
{`class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(1, 2)
v2 = Vector(3, 4)
print(v1 + v2)  # Output: Vector(4, 6)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `Vector` class defines a custom `__add__` method to overload the `+` operator. When two `Vector` objects are added, their `x` and `y` components are summed. The `__repr__` method provides a readable string representation of the vector.</p>

                    <h3>Polymorphism with Function Arguments</h3>
                    <p>Polymorphism also occurs when functions or methods can accept arguments of different types and handle them accordingly.</p>
                    <pre>
                        <code id="function-arguments-code">
{`def print_type(value):
    print(f"The type of the value is: {type(value).__name__}")

print_type(10)        # Output: The type of the value is: int
print_type("hello")   # Output: The type of the value is: str
print_type([1, 2, 3]) # Output: The type of the value is: list`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `print_type` function accepts any type of value and prints its type using the `type` function. This demonstrates how a single function can handle different types of arguments, showcasing polymorphism at the function level.</p>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/inheritance" className="btn btn-primary">Previous Page: Inheritance</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/scopes" className="btn btn-primary">Next Page: Scopes</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonPolymorphism;
