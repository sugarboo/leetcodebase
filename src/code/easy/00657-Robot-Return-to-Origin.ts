export function judgeCircle(moves: string): boolean {
  const DIRECTION_MAP = {
    U: [0, 1],
    D: [0, -1],
    L: [-1, 0],
    R: [1, 0],
  }

  const position = [0, 0]
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i]
    position[0] += DIRECTION_MAP[move][0]
    position[1] += DIRECTION_MAP[move][1]
  }

  return position[0] === 0 && position[1] === 0
}
