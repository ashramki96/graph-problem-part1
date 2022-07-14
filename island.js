function getNeighbors(row, col, graph) {
  let result = []
  // Check top
  if(graph[row-1]  && graph[row-1][col]=== 1) result.push([row-1,col])
  // Check bottom
  if(graph[row+1] && graph[row+1][col]=== 1) result.push([row+1, col])
  // Check left
  if(graph[row][col-1] && graph[row][col-1]=== 1) result.push([row, col-1])
  // Check right
  if(graph[row][col+1]  && graph[row][col+1] === 1) result.push([row, col+1])
  // Return neighbors
  return result
  // Your code here
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
    const visited = new Set()
  // Create a stack, put the starting node in the stack
    const stack = [[row, col]]
  // Put the stringified starting node in visited
    //visited.add(`${row},${col}`)
    visited.add([row, col].toString())
  // Initialize siz to 0
    let size = 0
  // While the stack is not empty,
    while (stack.length > 0){
    // Pop the first node
    const node = stack.pop()
    // DO THE THING (increment size by 1)
     size++
    const neighbors = getNeighbors(...node, graph)
    neighbors.forEach(neighbor => {
      if(!visited.has(neighbor.toString())) {
        // Then push all the UNVISITED neighbors on top of the stack
        stack.push(neighbor)
        // and mark them as visited
        visited.add(neighbor.toString()) 
      }
    });

    }
    
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size
    return size
  // Your code here
}

module.exports = [getNeighbors, islandSize];