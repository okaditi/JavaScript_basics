let a = document.getElementsByTagName('div')[0]
a.innerHTML = a.innerHTML + "<h1>Hello World!</h1>"

let div = document.createElement('div')
div.innerHTML = "<h1>Hello World!</h1>"
a.appendChild(div)

// Node.append() => append at the end of the node 
// node.prepend() => inserts at the begining of the node
// node.before() => inserts before node
// node.after() => inserts after node
// node.replacewith() => replaces node with the given node