type F = (x: number) => number

export function compose(functions: F[]): F {
  return function (x) {
    return functions.reduceRight((a, b) => b(a), x)
  }
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
