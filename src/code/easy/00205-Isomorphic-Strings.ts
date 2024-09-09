type LetterIndexMap = Map<string, number[]>

function isIsomorphic1(s: string, t: string): boolean {
  const getLetterIndexMap = (str: string): LetterIndexMap => {
    const map = new Map()

    for (let i = 0; i < str.length; i++) {
      const letter = str[i]
      if (map.has(letter)) {
        map.set(letter, [...map.get(letter), i])
      } else {
        map.set(letter, [i])
      }
    }

    return map
  }

  const sMap = getLetterIndexMap(s)
  const tMap = getLetterIndexMap(t)

  const sValues = Array.from(sMap.values())
  const tValues = Array.from(tMap.values())
  const sValuesLen = sValues.length
  const tValuesLen = tValues.length
  if (sValuesLen !== tValuesLen) {
    return false
  }

  let result = true
  for (let i = 0; i < sValuesLen; i++) {
    const sValue = sValues[i].join(',')
    const tValue = tValues[i].join(',')
    if (sValue !== tValue) {
      result = false
      break
    }
  }

  return result
}

function isIsomorphic2(s: string, t: string): boolean {
  // Isomorphic strings always have the same length
  if (s.length !== t.length) {
    return false
  }
  for (let i = 0; i < s.length; i++) {
    // Verify the first occurrence of the current character occurs at the same position in both s and t
    if (t.indexOf(t[i]) !== s.indexOf(s[i])) {
      return false
    }
  }
  return true
}

export function isIsomorphic(s: string, t: string): boolean {
  return isIsomorphic2(s, t)
}
