interface Counter {
  increment: () => number
  decrement: () => number
  reset: () => number
}

export function createCounter(init: number): Counter {
  const original = init
  let result = init

  return {
    increment: () => ++result,
    decrement: () => --result,
    reset: () => {
      result = original
      return result
    },
  }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
