import React from 'react';
import { Link } from 'react-router-dom';

const PythonClasses = () => {
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
                    <h1 className="display-4 text-primary">Python Classes</h1>
                    <p className="lead">Classes are the foundation of object-oriented programming in Python, enabling you to create reusable and structured code.</p>
                </div>
                
                <div className="mt-4">
                    <h3>What is a Class?</h3>
                    <p>A class in Python is like a blueprint for creating objects. It defines a set of attributes (data) and methods (functions) that the objects created from the class will have.</p>
                    <p>For example, consider a `Car` class. This class might have attributes like `brand`, `model`, and `year`, and methods like `start()`, `stop()`, and `drive()`.</p>

                    <h3>Defining a Class</h3>
                    <p>To define a class in Python, you use the <code>class</code> keyword followed by the class name. By convention, class names in Python start with an uppercase letter. Below is an example of defining a simple `Car` class:</p>
                    <pre>
                        <code id="define-class-code">
{`class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start(self):
        print(f"The {self.brand} {self.model} is starting.")

    def stop(self):
        print(f"The {self.brand} {self.model} is stopping.")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `Car` class has three attributes: `brand`, `model`, and `year`. These are initialized using the <code>__init__</code> method, which is a special method in Python known as the constructor. This method is called when a new object is created from the class. The class also has two methods: `start()` and `stop()`, which simulate the actions of starting and stopping the car.</p>

                    <h3>Creating Objects</h3>
                    <p>Once you have defined a class, you can create objects (instances) from it. Each object is a unique instance of the class with its own set of attributes and methods. Below is an example of creating objects from the `Car` class:</p>
                    <pre>
                        <code id="create-object-code">
{`my_car = Car("Toyota", "Camry", 2020)
another_car = Car("Honda", "Accord", 2019)

my_car.start()  # Output: The Toyota Camry is starting.
another_car.stop()  # Output: The Honda Accord is stopping.`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> In this example, we create two objects: `my_car` and `another_car`. Each object is an instance of the `Car` class with its own unique attributes. The `start()` and `stop()` methods are called on these objects to simulate starting and stopping the cars.</p>

                    <h3>Understanding <code>self</code></h3>
                    <p>The <code>self</code> parameter in class methods is a reference to the current instance of the class. It is used to access variables that belong to the class. The `self` parameter is a convention in Python; you can name it anything, but it is highly recommended to use `self` for clarity.</p>
                    <p>In the `Car` class example above, `self.brand`, `self.model`, and `self.year` refer to the attributes of the current object. When you call a method on an object, Python automatically passes the object as the first argument to the method.</p>

                    <h3>Inheritance</h3>
                    <p>Inheritance allows a class to inherit attributes and methods from another class. This helps in reusing code and creating a hierarchy of classes. The class that is being inherited from is called the parent class (or superclass), and the class that inherits from it is called the child class (or subclass).</p>
                    <p>Below is an example of inheritance in Python:</p>
                    <pre>
                        <code id="inheritance-code">
{`class ElectricCar(Car):
    def __init__(self, brand, model, year, battery_size):
        super().__init__(brand, model, year)
        self.battery_size = battery_size

    def charge(self):
        print(f"The {self.brand} {self.model} is charging.")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `ElectricCar` class inherits from the `Car` class using the syntax <code>class ElectricCar(Car)</code>. In addition to the attributes and methods inherited from the `Car` class, the `ElectricCar` class has an additional attribute `battery_size` and a method `charge()`. The <code>super()</code> function is used to call the constructor of the parent class, allowing us to reuse the initialization logic of the `Car` class.</p>

                    <h3>Method Overriding</h3>
                    <p>In a child class, you can override methods from the parent class. This means you provide a new implementation of a method that already exists in the parent class. Below is an example of method overriding:</p>
                    <pre>
                        <code id="method-overriding-code">
{`class SportsCar(Car):
    def start(self):
        print(f"The {self.brand} {self.model} roars to life!")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `SportsCar` class overrides the `start()` method from the `Car` class. Instead of using the parent class's implementation, the `SportsCar` class provides its own version of the `start()` method, which gives a different output when called.</p>

                    <h3>Encapsulation</h3>
                    <p>Encapsulation is the concept of bundling the data (attributes) and methods that operate on the data into a single unit (class). It also restricts access to certain attributes and methods to prevent them from being modified directly. In Python, this is typically done using a single underscore `_` or double underscore `__` prefix for attributes and methods.</p>
                    <p>Below is an example of encapsulation in Python:</p>
                    <pre>
                        <code id="encapsulation-code">
{`class BankAccount:
    def __init__(self, account_holder, balance):
        self.account_holder = account_holder
        self.__balance = balance

    def deposit(self, amount):
        self.__balance += amount

    def withdraw(self, amount):
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            print("Insufficient funds")

    def get_balance(self):
        return self.__balance`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> In the `BankAccount` class, the attribute `__balance` is private and cannot be accessed directly from outside the class. Instead, you must use the `deposit()`, `withdraw()`, and `get_balance()` methods to interact with the balance. This ensures that the balance is always manipulated through controlled methods.</p>

                    <h3>Polymorphism</h3>
                    <p>Polymorphism allows objects of different classes to be treated as objects of a common parent class. It also allows methods to be used interchangeably, even if their implementations differ. In Python, polymorphism is often achieved through method overriding.</p>
                    <p>Below is an example of polymorphism in Python:</p>
                    <pre>
                        <code id="polymorphism-code">
{`class Animal:
    def sound(self):
        pass

class Dog(Animal):
    def sound(self):
        return "Woof!"

class Cat(Animal):
    def sound(self):
        return "Meow!"`}
                                </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> In this example, the `Animal` class defines a method `sound()` that does nothing (it is an abstract method). The `Dog` and `Cat` classes inherit from `Animal` and override the `sound()` method to return different sounds. Despite `Dog` and `Cat` having different implementations of `sound()`, you can use them interchangeably as `Animal` objects. This is an example of polymorphism, where different classes can be treated as instances of the same class through a common interface.</p>

                    <h3>Class Methods and Static Methods</h3>
                    <p>In addition to instance methods (methods that operate on an instance of the class), Python classes can have class methods and static methods.</p>
                    <p><strong>Class methods</strong> are bound to the class and not the instance. They are defined using the <code>@classmethod</code> decorator and take `cls` as the first parameter, which refers to the class itself.</p>
                    <p><strong>Static methods</strong> are not bound to either the class or the instance. They are defined using the <code>@staticmethod</code> decorator and do not take `self` or `cls` as the first parameter.</p>
                    <pre>
                        <code id="class-static-methods-code">
{`class MyClass:
    class_variable = "I am a class variable"

    @classmethod
    def class_method(cls):
        print(f"Class method called. Class variable: {cls.class_variable}")

    @staticmethod
    def static_method():
        print("Static method called")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `MyClass` class includes a class variable `class_variable`, a class method `class_method`, and a static method `static_method`. The `class_method` accesses the class variable using `cls`, while the `static_method` does not access any class or instance-specific data. Class methods are often used for factory methods or alternative constructors, while static methods are used for utility functions that don't need access to class or instance data.</p>

                    <h3>Inheritance and Method Resolution Order (MRO)</h3>
                    <p>When dealing with multiple inheritance (a class inheriting from more than one parent class), Python uses a method resolution order (MRO) to determine which method is called. The MRO is calculated using the C3 linearization algorithm.</p>
                    <pre>
                        <code id="mro-code">
{`class A:
    def method(self):
        print("Method from A")

class B(A):
    def method(self):
        print("Method from B")

class C(A):
    def method(self):
        print("Method from C")

class D(B, C):
    pass

d = D()
d.method()  # Output: Method from B`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> In this example, class `D` inherits from both classes `B` and `C`, which in turn inherit from `A`. When `d.method()` is called, Python uses the MRO to determine which method to execute. The output is "Method from B" because `B` is listed before `C` in the inheritance list of class `D`. Python's MRO ensures a consistent method resolution order even with multiple inheritance.</p>
                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/functions" className="btn btn-primary">Previous Page: Functions</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/inheritance" className="btn btn-primary">Next Page: Inheritance</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonClasses;
