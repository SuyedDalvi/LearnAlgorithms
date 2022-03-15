

/**
 * Leetcode 323. Number of Connected Components in an Undirected Graph
 * You have a graph of n nodes. You are given an integer n and an array edges where edges[i] = [ai, bi] indicates that there is an edge between ai and bi in the graph.
 * Return the number of connected components in the graph.
 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
 var countComponents = function(n, edges) {
    
    const buildAdjList = (n,edges) => {
        // adjacency list is an array containing nodes and the nodes on the other side of its edge.
        const adjList = Array.from({length:n}, () => []);
        for(const edge of edges){
            let [src,dest] = edge;
            adjList[src].push(dest);
            adjList[dest].push(src);
        }
        return adjList;
    }

    const bfs = (node, adjList, visited) => {
        const queue = [node]
        visited[node] = true;

        while(queue.length){
            const currNode = queue.shift();
            for(const neighbour of adjList[currNode]) {
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            }
        }
    }
    const adjList = buildAdjList(n,edges);
    // console.log(adjList);
    const visited = {} // objects will be pass by reference
    let numComponents = 0;
    for(let vertex = 0; vertex < adjList.length; vertex++){
        if(!visited[vertex]){
            numComponents++;
            bfs(vertex,adjList, visited)
        }
    }

    // adjList.forEach((node,vertex) => {
    //     if(!visited[vertex]){
    //         numComponents++;
    //         bfs(node,adjList,visited)
    //     }
    // })
    return numComponents;

};

const components = countComponents(6,[[0,1],[1,2],[1,5],[3,4]]);
console.log(components);