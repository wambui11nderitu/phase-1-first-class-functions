// receivesAFunction function
function receivesAFunction(callback) {
    // Call the callback function
    callback();
}

// returnsANamedFunction function
function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
        // Function body
    }
    // Return the named function
    return namedFunction;
}

// returnsAnAnonymousFunction function
function returnsAnAnonymousFunction() {
    // Return an anonymous function
    return function() {
        // Function body
    };
}
