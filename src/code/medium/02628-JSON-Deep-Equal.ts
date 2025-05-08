export function areDeeplyEqual(o1: any, o2: any): boolean {
  // Primitive and identical reference
  if (o1 === o2) {
    return true
  }
  if (o1 === null || o2 === null) {
    return false
  }
  if (typeof o1 !== 'object' || typeof o2 !== 'object') {
    return false
  }

  // Array vs non-array
  const isArr1 = Array.isArray(o1)
  const isArr2 = Array.isArray(o2)
  if (isArr1 !== isArr2) {
    return false
  }

  // Compare arrays
  if (isArr1) {
    if (o1.length !== o2.length) {
      return false
    }
    for (let i = 0; i < o1.length; i++) {
      if (!areDeeplyEqual(o1[i], o2[i])) {
        return false
      }
    }
    return true
  }

  // Compare objects
  const keys1 = Object.keys(o1)
  const keys2 = Object.keys(o2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (const key of keys1) {
    if (!areDeeplyEqual(o1[key], o2[key])) {
      return false
    }
  }
  return true
}
