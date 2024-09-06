import React from 'react';
import { Link } from 'react-router-dom';

const PythonFileHandling = () => {
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
                    <h1 className="display-4 text-primary">Python File Handling</h1>
                    <p className="lead">File handling in Python allows you to read from and write to files. This is essential for managing data and interacting with the file system.</p>
                </div>
                <div className="mt-4">
                    <h3>Opening a File</h3>
                    <p>Files are opened using the built-in `open()` function. You need to specify the file name and the mode in which to open the file.</p>
                    <pre>
                        <code id="open-file-code">
{`file = open("example.txt", "r")  # Open file in read mode
print(file.read())
file.close()`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `open()` function opens a file named "example.txt" in read mode ("r"). The `read()` method reads the content of the file. Finally, the `close()` method is called to close the file.</p>

                    <h3>Writing to a File</h3>
                    <p>To write to a file, you open it in write mode ("w"). If the file does not exist, it will be created. If it exists, its content will be overwritten.</p>
                    <pre>
                        <code id="write-file-code">
{`file = open("example.txt", "w")  # Open file in write mode
file.write("Hello, World!")
file.close()`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> Opening a file in write mode allows you to write data to it. The `write()` method writes "Hello, World!" to "example.txt". If the file already contains data, it will be overwritten.</p>

                    <h3>Appending to a File</h3>
                    <p>To add data to the end of a file without overwriting its existing content, open the file in append mode ("a").</p>
                    <pre>
                        <code id="append-file-code">
{`file = open("example.txt", "a")  # Open file in append mode
file.write("Appending new content.")
file.close()`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `a` mode opens the file for appending. The `write()` method adds "Appending new content." to the end of "example.txt" without affecting existing content.</p>

                    <h3>Reading Files Line by Line</h3>
                    <p>You can read a file line by line using a loop. This is useful for processing large files where reading the entire file into memory may not be practical.</p>
                    <pre>
                        <code id="read-lines-code">
{`with open("example.txt", "r") as file:
    for line in file:
        print(line.strip())`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `with` statement is used to open the file and ensures it is properly closed after the block of code executes. The file is read line by line, and `strip()` removes any extra newline characters.</p>

                    <h3>Using `with` Statement</h3>
                    <p>The `with` statement simplifies file handling by automatically closing the file when the block is exited, even if an error occurs.</p>
                    <pre>
                        <code id="with-statement-code">
{`with open("example.txt", "r") as file:
    content = file.read()
    print(content)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `with` statement manages file opening and closing automatically. It is used here to read the entire content of "example.txt" and print it. The file is closed automatically at the end of the `with` block.</p>

                    <h3>Handling File Exceptions</h3>
                    <p>It is important to handle exceptions that may occur during file operations, such as file not found or permission errors.</p>
                    <pre>
                        <code id="file-exceptions-code">
{`try:
    with open("non_existent_file.txt", "r") as file:
        content = file.read()
except FileNotFoundError:
    print("File not found.")
except IOError:
    print("An error occurred while handling the file.")`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> The `try` block attempts to open and read a file that does not exist. If a `FileNotFoundError` or `IOError` occurs, the corresponding `except` block handles the exception and prints an appropriate error message.</p>

                    <h3>Writing Binary Files</h3>
                    <p>To write binary data, open the file in binary write mode ("wb"). This is useful for handling non-text data such as images or executables.</p>
                    <pre>
                        <code id="write-binary-code">
{`data = b"Binary data"

with open("binary_file.bin", "wb") as file:
    file.write(data)`}
                        </code>
                        <button className="copy-btn" onClick={(e) => copyCode(e.target)}>Copy</button>
                    </pre>
                    <p><strong>Explanation:</strong> Binary data is written to a file using the `wb` mode. The `b` prefix before the string indicates that it is a bytes object. The file "binary_file.bin" is created and written with the binary data.</p>

                </div>

                <div className="d-flex justify-content-between">
                    <div className="mt-4">
                        <Link to="/exceptions" className="btn btn-primary">Previous Page: Exceptions</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/json" className="btn btn-primary">Next Page: Json</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PythonFileHandling;
