export type P = Promise<number>

async function addTwoPromises1(promise1: P, promise2: P): P {
  const res1 = await promise1
  const res2 = await promise2
  return Promise.resolve(res1 + res2)
}

async function addTwoPromises2(promise1: P, promise2: P): P {
  const [res1, res2] = await Promise.all([
    promise1,
    promise2,
  ])

  return res1 + res2
}

export function addTwoPromises(promise1: P, promise2: P): P {
  return addTwoPromises2(promise1, promise2)
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
