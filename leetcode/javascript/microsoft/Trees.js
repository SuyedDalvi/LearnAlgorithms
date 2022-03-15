
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

var createTree = () => {
    const a = new Node('a');
    const b = new Node('b');
    const c = new Node('c');
    const d = new Node('d');
    const e = new Node('e');
    const f = new Node('f');
    const g = new Node('g');
    const h = new Node('g');
    const i = new Node('g');
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.right = f;
    // c.left = g;
    // g.left = h;
    // h.right = i;
    return a;
}
var createBSTTree = () => {
    const a = new Node(0);
    const b = new Node(-1);
    const c = new Node(4);
    const d = new Node(3);
    const e = new Node(6);
    a.left = b;
    a.right = c;
    c.left = d;
    c.right = e;
    return a;
}
var root = createTree();

const dfsTraversal = (root) => {
// uses stack for iterative version
    const visited = []
    
    if(!root){
        return visited;
    }

    const stack = [root]

    while(stack.length) {

        const currentNode = stack.pop();

        if(currentNode){
            if(currentNode.right) stack.push(currentNode.right);
            if(currentNode.left) stack.push(currentNode.left);

            visited.push(currentNode.val);
        }
    }
    return visited;
}

const preOrderTraversal = (root) => {
    const visited = [];

    if(!root){
        return visited;
    }

    const stack = [root];

    while(stack.length) {
        node = stack.pop();
        visited.push(node.val);
        if(node.right) stack.push(node.right)
        if(node.left) stack.push(node.left);

    }
    return visited;
}


//console.log(dfsTraversal(root));

const dfsTraversalRecursive = (root) => {

    if(!root){
        return [];
    }

    const left = dfsTraversalRecursive(root.left);
    const right = dfsTraversalRecursive(root.right);

    return [root.val,...left,...right];
}

//console.log(dfsTraversalRecursive(root));

const bfsTraversal = (root) => {

    //uses queue for iterative version. BFS should be not implemented recursively.
    const visited = []
    
    if(!root){
        return visited;
    }

    const queue = [root]

    while(queue.length) {
        const currentNode = queue.shift();
        visited.push(currentNode.val);

        if(currentNode){
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
    return visited;
}

console.log(bfsTraversal(root));

// Leetcode - 110
var isBalanced = function(root) {
    // time complexity = O(nlogn) 
    const height = (node) => {
        if(!node){
            return 0
        }        
        let leftChildHeight = height(node.left);
        let rightChildHeight = height(node.right);
        return 1 + Math.max(leftChildHeight, rightChildHeight );   
    }

    if(!root) {
        return true;
    }
    return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};


var isBalancedEfficient = function(root) {

    const height = (node) => {
        // returns 0, -1, height
        if(!node) return 0;    
        let left = height(node.left)
        let right = height(node.right)
        // check left and right for checking whether the subtree nodes are imbalanced
        if(left == -1 || right == -1 || Math.abs(left - right) > 1){
            return -1;
        }
        return Math.max(left,right) + 1
    }
    return height(root) != -1;
}

// console.log(isBalancedEfficient(root))


// valid bst
let bstroot = createBSTTree();
console.log(bstroot);
var isValidBst =  (root) => { 

    const checkBstTree = (root, min, max) => {
        // for boolean type of return value, there should be two conditions - one that return true,the other return false
        if(!root) return true;

        if((min !=null && min >= root.val) || (max !=null && max <= root.val)){
            return false;
        }
        return checkBstTree(root.left, min, root.val) && checkBstTree(root.right, root.val, max);
    }

    if(!root.left && !root.right){
        return true;
    }
    
    return checkBstTree(root, null, null);
}

console.log(isValidBst(bstroot));

// const arr = [1,2,3]
// console.log(arr.reverse(), arr);