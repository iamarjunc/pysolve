import React from 'react';
import { Link } from 'react-router-dom';

const PythonInheritance = () => {
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
                <h1 className="display-4 text-primary">Python Inheritance</h1>
<p className="lead">Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class (the child or subclass) to inherit attributes and methods from another class (the parent or superclass). This mechanism promotes code reusability, reduces redundancy, and establishes a natural hierarchy among classes. By using inheritance, you can create a new class based on an existing class, extending its functionality and making it more specific to your needs.</p>

<div className="mt-4">
    <h3>Basics of Inheritance</h3>
    <p>Inheritance allows a new class to acquire attributes and methods from an existing class. This helps in creating a class hierarchy where the new class (subclass) can build upon and extend the behavior of the existing class (superclass). Inheritance supports code reuse and can make your code more modular and maintainable.</p>
    <p>In Python, inheritance is defined by specifying the parent class in parentheses after the subclass name. The subclass inherits all methods and attributes of the parent class, and it can also override or extend these methods to provide more specific functionality.</p>
    <pre>
        <code id="basic-inheritance-code">
{`class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

dog = Dog("Buddy")
cat = Cat("Whiskers")

print(dog.speak())  # Output: Buddy says Woof!
print(cat.speak())  # Output: Whiskers says Meow!`}
        </code>
        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
    </pre>
    <p><strong>Explanation:</strong></p>
    <ul>
        <li><strong>Animal Class:</strong> This is the base or parent class. It contains an `__init__` method to initialize the `name` attribute and a `speak` method that is meant to be overridden by subclasses. The `speak` method raises a `NotImplementedError`, indicating that it is an abstract method that should be implemented by any subclass.</li>
        <li><strong>Dog Class:</strong> This is a subclass of `Animal`. It inherits the `name` attribute and `__init__` method from `Animal` but provides its own implementation of the `speak` method. When called, this method returns a message indicating that the dog says "Woof!".</li>
        <li><strong>Cat Class:</strong> Another subclass of `Animal`. Similar to `Dog`, it inherits the `name` attribute and `__init__` method from `Animal` and implements its own version of the `speak` method, which returns a message indicating that the cat says "Meow!".</li>
    </ul>
    <p>When creating instances of `Dog` and `Cat` and calling their `speak` methods, the output is specific to each class due to the overridden methods. This demonstrates how inheritance allows subclasses to provide their own behavior while still leveraging the functionality of the parent class.</p>
</div>

                    <h3>Types of Inheritance</h3>
                    <p>Python supports several types of inheritance:</p>

                    <h4>Single Inheritance</h4>
                    <pre>
                        <code id="single-inheritance-code">
{`class Parent:
    pass

class Child(Parent):
    pass`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> Single inheritance involves a single parent class (`Parent`) and a single child class (`Child`). The `Child` class inherits from the `Parent` class, gaining its attributes and methods. This is the simplest form of inheritance.</p>

                    <h4>Multiple Inheritance</h4>
                    <pre>
                        <code id="multiple-inheritance-code">
{`class A:
    def method_a(self):
        print("Method A")

class B:
    def method_b(self):
        print("Method B")

class C(A, B):
    pass

obj = C()
obj.method_a()  # Output: Method A
obj.method_b()  # Output: Method B`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> Multiple inheritance allows a class (`C`) to inherit from more than one parent class (`A` and `B`). The `C` class inherits methods from both `A` and `B`. In the example, `obj` of class `C` can call both `method_a` from `A` and `method_b` from `B`.</p>

                    <h4>Multilevel Inheritance</h4>
                    <pre>
                        <code id="multilevel-inheritance-code">
{`class Grandparent:
    pass

class Parent(Grandparent):
    pass

class Child(Parent):
    pass`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> In multilevel inheritance, a class (`Child`) inherits from another class (`Parent`), which in turn inherits from another class (`Grandparent`). This creates a hierarchy where `Child` inherits from `Parent`, and `Parent` inherits from `Grandparent`.</p>

                    <h4>Hierarchical Inheritance</h4>
                    <pre>
                        <code id="hierarchical-inheritance-code">
{`class Parent:
    pass

class Child1(Parent):
    pass

class Child2(Parent):
    pass`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> In hierarchical inheritance, multiple classes (`Child1` and `Child2`) inherit from a single parent class (`Parent`). Both `Child1` and `Child2` have access to the attributes and methods of `Parent`.</p>

                    <h4>Hybrid Inheritance</h4>
                    <pre>
                        <code id="hybrid-inheritance-code">
{`class A:
    pass

class B:
    pass

class C(A, B):
    pass

class D(C):
    pass`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> Hybrid inheritance is a combination of two or more types of inheritance. In this example, `D` inherits from `C`, which inherits from both `A` and `B`. This creates a complex hierarchy combining multiple inheritance styles.</p>

                    <h3>Method Resolution Order (MRO)</h3>
<p>Method Resolution Order (MRO) is a mechanism in Python that determines the order in which base classes are looked up when searching for a method. It is essential for understanding how Python resolves method calls in complex class hierarchies. MRO ensures that the correct method is called when multiple inheritance is involved.</p>

<h4>Beginner Level: Basic MRO Example</h4>
<p>To understand MRO, start with a simple class hierarchy where methods are overridden:</p>
<pre>
    <code id="basic-mro-code">
{`class A:
    def greet(self):
        print("Hello from A")

class B(A):
    def greet(self):
        print("Hello from B")

class C(A):
    def greet(self):
        print("Hello from C")

class D(B, C):
    pass

obj = D()
obj.greet()  # Output: Hello from B`}
    </code>
    <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
<p><strong>Explanation:</strong> In this example, `D` inherits from both `B` and `C`, which both inherit from `A`. Python uses the MRO to determine the order in which methods are looked up. The MRO for class `D` is `D -> B -> C -> A`. Therefore, when `greet` is called on an instance of `D`, Python will use the method from `B`, as `B` appears first in the MRO.</p>

<h4>Intermediate Level: Understanding MRO with Method Resolution</h4>
<p>Let's see how MRO resolves methods in a more complex hierarchy and examine the order of method resolution:</p>
<pre>
    <code id="intermediate-mro-code">
{`class A:
    def greet(self):
        print("Hello from A")

class B(A):
    def greet(self):
        print("Hello from B")

class C(A):
    def greet(self):
        print("Hello from C")

class D(B, C):
    def greet(self):
        print("Hello from D")

class E(D):
    pass

obj = E()
obj.greet()  # Output: Hello from D

print(E.mro())  # Output: [<class '__main__.E'>, <class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>]`}
    </code>
    <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
<p><strong>Explanation:</strong> In this hierarchy, `E` inherits from `D`, which inherits from `B` and `C`. The MRO for `E` is `E -> D -> B -> C -> A`. When `greet` is called on an instance of `E`, Python first looks in `E`, then `D`, and so forth. Since `D` defines the `greet` method, this method is called. The `mro()` method shows the MRO as a list, which helps understand the order of class resolution.</p>

<h4>Advanced Level: Customizing MRO with `__mro__` and `mro()` Method</h4>
<p>Python provides two ways to view the MRO: the `__mro__` attribute and the `mro()` method. Both methods offer insights into how methods are resolved, but in different formats:</p>
<pre>
    <code id="advanced-mro-code">
{`class A:
    def greet(self):
        print("Hello from A")

class B(A):
    def greet(self):
        print("Hello from B")

class C(A):
    def greet(self):
        print("Hello from C")

class D(B, C):
    def greet(self):
        print("Hello from D")

class E(D):
    pass

print("MRO using __mro__:", E.__mro__)  # Output: (<class '__main__.E'>, <class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>)
print("MRO using mro():", E.mro())    # Output: [<class '__main__.E'>, <class '__main__.D'>, <class '__main__.B'>, <class '__main__.C'>, <class '__main__.A'>, <class 'object'>]`}
    </code>
    <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
<p><strong>Definitions:</strong></p>
<ul>
    <li><strong>Method Resolution Order (MRO):</strong> The order in which base classes are looked up when searching for a method. Python uses MRO to resolve which method is called in the presence of multiple inheritance.</li>
    <li><strong>__mro__ Attribute:</strong> A tuple that contains the MRO for a class. It shows the order in which classes are searched when looking for a method. This attribute is read-only.</li>
    <li><strong>mro() Method:</strong> A method that returns a list representing the MRO for a class. It provides the same information as `__mro__` but in list format, making it easier to work with in some cases.</li>
</ul>
<p><strong>Explanation:</strong> The `__mro__` attribute provides the MRO as a tuple, while the `mro()` method provides it as a list. Both show the order in which Python will search classes for methods. This helps developers understand and debug method resolution in complex class hierarchies.</p>

                    <h3>Using the <code>super()</code> Function</h3>
                    <pre>
                        <code id="super-function-code">
{`class Parent:
    def __init__(self, name):
        self.name = name

    def greet(self):
        print(f"Hello, {self.name}")

class Child(Parent):
    def greet(self):
        super().greet()
        print("How are you?")

child = Child("Alice")
child.greet()`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `super()` function is used to call a method from a parent class. In the `Child` class, the `greet` method first calls `super().greet()` to execute the `greet` method of `Parent`, and then adds additional behavior by printing "How are you?" This demonstrates how `super()` can extend or modify the behavior of inherited methods.</p>

                 
                    <h3>Private and Protected Members</h3>
<p>In Python, private and protected members are used to control access to the data and methods of a class. This is important for encapsulation, ensuring that internal state is not exposed or modified directly from outside the class. Here’s how you can use private and protected members:</p>

<pre>
    <code id="private-protected-members-code">
{`class MyClass:
    def __init__(self):
        self.public_var = "I am public"
        self._protected_var = "I am protected"
        self.__private_var = "I am private"

    def get_private_var(self):
        return self.__private_var

class Child(MyClass):
    def __init__(self):
        super().__init__()
        self._protected_var = "Modified in child"
        # self.__private_var = "Not accessible in child"

    def print_vars(self):
        print("Public Variable:", self.public_var)
        print("Protected Variable:", self._protected_var)
        print("Private Variable (via method):", self.get_private_var())

obj = Child()
obj.print_vars()
print("Accessing protected var directly from outside:", obj._protected_var)
# print("Accessing private var directly from outside:", obj.__private_var)  # This will raise an AttributeError`}
    </code>
    <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
</pre>
<p><strong>Explanation:</strong></p>
<ul>
    <li><strong>Private Members:</strong> In Python, private members are indicated by double underscores (e.g., `__private_var`). These members are intended to be inaccessible from outside the class. They are name-mangled to include the class name, making it harder (but not impossible) to access them from outside the class. In the example, `__private_var` is private and cannot be accessed directly from the `Child` class or outside the `MyClass` class.</li>
    <li><strong>Protected Members:</strong> Protected members are denoted by a single underscore (e.g., `_protected_var`). They are not strictly private, but they are intended to be used only within the class and its subclasses. In the `Child` class, `_protected_var` can be modified and accessed directly, but it's generally a convention to avoid doing so from outside the class.</li>
    <li><strong>Accessing Private Members:</strong> While `__private_var` cannot be accessed directly from outside the class, it can be accessed through a public method defined in the class, such as `get_private_var()`. This is a common practice to provide controlled access to private data.</li>
    <li><strong>Example Usage:</strong> In the `print_vars` method of the `Child` class, you can see that the `protected_var` can be accessed and modified directly. However, attempting to access the `private_var` directly from outside the `MyClass` class will raise an `AttributeError`, showing the effectiveness of name mangling.</li>
</ul>

                    <h3>Composition vs. Inheritance</h3>
                    <p>While inheritance is about creating a new class that is a modified version of an existing class, composition is about creating a class that contains objects of other classes to provide its functionality. Here's a comparison:</p>
                    <pre>
                        <code id="composition-inheritance-code">
{`class Engine:
    def start(self):
        print("Engine starting...")

class Car:
    def __init__(self):
        self.engine = Engine()

    def start(self):
        self.engine.start()
        print("Car starting...")

car = Car()
car.start()`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> In this example, the `Car` class uses composition by including an instance of the `Engine` class. The `Car` class delegates the `start` functionality to the `Engine` class and then adds its own behavior. This is an alternative to inheritance and can be useful when you want to reuse functionality without creating a hierarchical relationship.</p>

                    <div className="d-flex justify-content-between">
                        <div className="mt-4">
                            <Link to="/classes" className="btn btn-primary">Previous Page: class</Link>
                        </div>
                        <div className="mt-4">
                            <Link to="/polymorphism" className="btn btn-primary">Next Page: Polymorphism</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonInheritance;

