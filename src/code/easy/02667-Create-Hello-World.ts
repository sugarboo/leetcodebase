export function createHelloWorld() {
  return function (..._args: unknown[]): string {
    return 'Hello World'
  }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
