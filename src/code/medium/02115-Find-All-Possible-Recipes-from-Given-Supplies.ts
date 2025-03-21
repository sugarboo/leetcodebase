export function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
  // Store available supplies
  const availableSupplies = new Set(supplies)
  // Map recipes to its index
  const recipeToIndex = new Map<string, number>()
  // Map ingredients to recipe that need it
  const dependencyGraph = new Map<string, number[]>()

  // Create recipe to index mapping
  for (let i = 0; i < recipes.length; i++) {
    recipeToIndex.set(recipes[i], i)
  }

  // Count of non-supply ingredients needed for each recipe
  const inDegree = Array(recipes.length).fill(0)

  // Build dependency graph
  for (let i = 0; i < recipes.length; i++) {
    for (const ingredient of ingredients[i]) {
      if (!availableSupplies.has(ingredient)) {
        // Add dependency edge: ingredient -> recipe
        dependencyGraph.set(ingredient, [...(dependencyGraph.get(ingredient) || []), i])
        // Increment in-degree of recipe
        inDegree[i]++
      }
    }
  }

  // Starts with recipes that only need supplies
  const queue: number[] = []
  for (let i = 0; i < recipes.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }

  // Process recipes in topological order
  const createdRecipes: string[] = []
  while (queue.length > 0) {
    const recipeIndex = queue.shift()!
    createdRecipes.push(recipes[recipeIndex])

    // Skip if no recipes depend on this one
    if (!dependencyGraph.has(recipes[recipeIndex])) {
      continue
    }

    // Update recipes that depend on current recipe
    for (const dependent of dependencyGraph.get(recipes[recipeIndex])!) {
      if (--inDegree[dependent] === 0) {
        queue.push(dependent)
      }
    }
  }

  return createdRecipes
}
