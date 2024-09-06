import React from 'react';
import { Link } from 'react-router-dom';

const PythonRegexHandling = () => {
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
                    <h1 className="display-4 text-primary">Python Regular Expressions</h1>
                    <p className="lead">Regular expressions (regex) are a powerful tool for pattern matching and text manipulation. Python provides the <code>re</code> module for working with regular expressions.</p>
                </div>
                <div className="mt-4">
                    <h3>Importing the `re` Module</h3>
                    <p>To work with regular expressions in Python, you need to import the <code>re</code> module.</p>
                    <pre>
                        <code id="import-re-code">
{`import re`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>re</code> module provides functions and classes to work with regular expressions.</p>

                    <h3>Finding Patterns in a String</h3>
                    <p>You can find patterns in a string using the <code>re.findall()</code> function.</p>
                    <pre>
                        <code id="findall-code">
{`import re

text = "The rain in Spain falls mainly on the plain."
pattern = "ain"
matches = re.findall(pattern, text)
print(matches)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>findall()</code> method returns a list of all occurrences of the pattern in the string. The output will be <code>['ain', 'ain', 'ain']</code>.</p>

                    <h3>Searching for a Pattern</h3>
                    <p>To search for a pattern in a string and get the first match, use the <code>re.search()</code> function.</p>
                    <pre>
                        <code id="search-code">
{`import re

text = "The rain in Spain falls mainly on the plain."
pattern = "Spain"
match = re.search(pattern, text)
if match:
    print("Pattern found at position:", match.start())`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>search()</code> method finds the first occurrence of the pattern in the string and returns a match object. The <code>start()</code> method of the match object returns the position of the first character of the match.</p>

                    <h3>Replacing Patterns</h3>
                    <p>To replace occurrences of a pattern in a string, use the <code>re.sub()</code> function.</p>
                    <pre>
                        <code id="sub-code">
{`import re

text = "The rain in Spain falls mainly on the plain."
pattern = "plain"
replacement = "desert"
new_text = re.sub(pattern, replacement, text)
print(new_text)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>sub()</code> method replaces all occurrences of the pattern with the replacement string. The output will be <code>"The rain in Spain falls mainly on the desert."</code>.</p>

                    <h3>Splitting Strings</h3>
                    <p>You can split a string into a list using the <code>re.split()</code> function.</p>
                    <pre>
                        <code id="split-code">
{`import re

text = "The rain in Spain falls mainly on the plain."
pattern = "\\s+"  # split by any whitespace
words = re.split(pattern, text)
print(words)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>split()</code> method splits the string at each occurrence of the pattern. In this case, it splits the string at any whitespace, resulting in a list of words.</p>

                    <h3>Compiling Regular Expressions</h3>
                    <p>You can compile a regular expression pattern into a regex object for better performance when using the same pattern multiple times.</p>
                    <pre>
                        <code id="compile-code">
{`import re

pattern = re.compile("ain")
text = "The rain in Spain falls mainly on the plain."
matches = pattern.findall(text)
print(matches)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The <code>compile()</code> method compiles the pattern into a regex object, which can then be used to perform matching operations. This is more efficient for repeated use.</p>

                    <h3>Handling Regex Errors</h3>
                    <p>Handle errors such as <code>re.error</code> to manage cases where the regex pattern is invalid.</p>
                    <pre>
                        <code id="regex-errors-code">
{`import re

pattern = "[0-9"
try:
    re.compile(pattern)
except re.error as e:
    print("Invalid regex pattern:", e)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> If the regex pattern is invalid, a <code>re.error</code> will be raised. The <code>try</code> block attempts to compile the pattern, and the <code>except</code> block handles any errors by printing an error message.</p>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/json" className="btn btn-primary">Previous Page: Json</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/generators" className="btn btn-primary">Next Page: Generators</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonRegexHandling;
