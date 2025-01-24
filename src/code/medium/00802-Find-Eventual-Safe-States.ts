export function eventualSafeNodes(graph: number[][]): number[] {
  const n = graph.length
  const result: number[] = []
  // Use color to mark the status of the node: 0: unvisited, 1: visiting, 2: visited
  const color = Array.from({ length: n }, () => 0)

  // DFS to check if the node is safe
  const dfs = (node: number, graph: number[][], color: number[]) => {
    // If the node is already visited, return true if it's safe, false otherwise
    if (color[node] > 0) {
      return color[node] === 2
    }
    // Mark the node as visiting
    color[node] = 1
    for (const neighbor of graph[node]) {
      // If the neighbor is already visited, skip it
      if (color[neighbor] === 2)
        continue
      // If the neighbor is visiting, it means there's a cycle, return false
      if (color[neighbor] === 1 || !dfs(neighbor, graph, color)) {
        return false
      }
    }
    // Mark the node as visited
    color[node] = 2
    return true
  }

  // Iterate through all nodes to check if they are safe
  for (let i = 0; i < n; i++) {
    if (dfs(i, graph, color)) {
      // If the node is safe, add it to the result
      result.push(i)
    }
  }

  // Return the result
  return result
}
