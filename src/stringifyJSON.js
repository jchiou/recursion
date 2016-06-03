// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

    if (obj === undefined || typeof obj === "function") {
        return undefined;
    }

    else if (obj === null) {
        return "null";
    }
    
    // needed to escape inner quotation mark
    else if (typeof obj === "string") {
        return "\"" + obj + "\"";
    }
    
    //for arrays, iterate over each array and use recursion to transform element to string
    else if (obj.constructor === Array) {
        var stringified = "";
        for (var i = 0; i < obj.length; i++) {
            // concatenate each stringified element by calling the element recursively and adding a comma after each element
            stringified = stringified.concat(stringifyJSON(obj[i]) + ",")
        }
        // need to slice off last comma
        return "[" + stringified.slice(0,stringified.length-1) + "]";
    }
    // for objects, iterate over each key and use recursion to transform each key/value to strings
    else if (obj.constructor === Object) {
        var stringified = "";
        for (var key in obj)
            // make sure value is not undefined or function
            if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
                // couldn't use .join() so must concat with a comma after each value
                stringified = stringified.concat(stringifyJSON(key) + ":" + stringifyJSON(obj[key]) + ",");
            }
        // need to slice off last comma
        return "{" + stringified.slice(0,stringified.length-1) + "}";
    }
    
    else {
        return obj.toString();
    }
}

