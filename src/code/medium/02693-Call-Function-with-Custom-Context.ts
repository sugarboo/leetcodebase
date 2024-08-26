type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }

// interface Function {
// callPolyfill: (context: Record<string, JSONValue>, ...args: JSONValue[]) => JSONValue
// }

export const callPolyfill = function (context, ...args): JSONValue {
  return this.apply(context, args)
}

/**
 * function increment() { this.count++; return this.count; }
 * increment.callPolyfill({count: 1}); // 2
 */
