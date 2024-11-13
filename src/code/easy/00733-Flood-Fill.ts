export function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const m = image.length
  const n = m ? image[0].length : 0
  const oldColor = image[sr][sc]

  const dfs = (r: number, c: number) => {
    if (r < 0 || c < 0 || r >= m || c >= n || image[r][c] !== oldColor) {
      return
    }
    image[r][c] = color
    dfs(r - 1, c)
    dfs(r + 1, c)
    dfs(r, c - 1)
    dfs(r, c + 1)
  }

  if (oldColor !== color) {
    dfs(sr, sc)
  }

  return image
}
