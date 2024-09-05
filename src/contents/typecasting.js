import React from 'react';

const Typecasting = () => {
    // Function to handle code copy
    const copyCode = (btn) => {
        // Find the <code> block related to the clicked button
        const codeBlock = btn.closest('pre').querySelector('code');
    
        if (codeBlock) {
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
        } else {
            alert('Failed to find code block.');
        }
    };
    

    return (
        <div>
            <div className="content">
                <div className="jumbotron jumbotron-fluid bg-light p-4 rounded">
                    <h1 className="display-4 text-primary">Python Type Casting</h1>
                    <p className="lead">Type casting in Python refers to the process of converting the value of one data type to another. This is useful when you need to ensure that your data is in the correct type for processing.</p>
                </div>
                <div className="mt-4">
                    <h3>Common Type Conversions</h3>
                    <p>Python provides several built-in functions to perform type conversions. Here are some common ones:</p>
                    
                    <h4>1. Convert to String</h4>
                    <p>Use the <code>str()</code> function to convert other data types to a string.</p>
                    <pre>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                        <code id="str-convert-code">text = str(123)  # Converts integer 123 to string '123'</code>
                    </pre>

                    <h4>2. Convert to Integer</h4>
                    <p>Use the <code>int()</code> function to convert other data types to an integer.</p>
                    <pre>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                        <code id="int-convert-code">age = int('45')  # Converts string '45' to integer 45</code>
                    </pre>

                    <h4>3. Convert to Float</h4>
                    <p>Use the <code>float()</code> function to convert other data types to a float.</p>
                    <pre>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                        <code id="float-convert-code">price = float('19.99')  # Converts string '19.99' to float 19.99</code>
                    </pre>

                    <h4>4. Convert to Boolean</h4>
                    <p>Use the <code>bool()</code> function to convert other data types to a boolean.</p>
                    <pre>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                        <code id="bool-convert-code">flag = bool(0)  # Converts integer 0 to boolean False</code>
                    </pre>

                    <h4>5. Convert to List</h4>
                    <p>Use the <code>list()</code> function to convert other data types to a list.</p>
                    <pre>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                        <code id="list-convert-code">items = list('abc')  # Converts string 'abc' to list ['a', 'b', 'c']</code>
                    </pre>

                    <h4>6. Convert to Dictionary</h4>
                    <p>Dictionaries can be created from key-value pairs.</p>
                    <pre>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                        <code id="dict-convert-code">person = dict(name='Alice', age=25)  # Creates a dictionary with keys 'name' and 'age'</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default Typecasting;
