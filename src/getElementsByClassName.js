// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };


// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
    // need array of all class names
    var results = [];
    var body = document.body;
    
    // recursive function for walking the dom
    function walkDom (node) {
        // if childNodes exist...
        if (node !== undefined) {
            // and if it is are an array of nodes, then iterate over each node and call on each node recursively
            if (node.length) {
                for (var i = 0 ; i < node.length; i++) {
                    if (node[i].classList !== undefined) {
                        walkDom(node[i])
                    }
                }
            }
            // individual nodes go here
            // if the node has a classList that contains the className, push into array
            // then call recursively on its childNodes
            else {
                if (node.classList) {
                    if (node.classList.contains(className)) {
                        results.push(node)
                    }
                    walkDom(node.childNodes);
                }
            }
        }

        
        
    }
    walkDom(body);
    console.log(results);
    //termination case
    return results;

}

 
getElementsByClassName('targetClassName');