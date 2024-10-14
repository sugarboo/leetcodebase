import { describe, expect, it } from 'vitest'
import { longestPalindrome } from '../../code/easy/00409-Longest-Palindrome'

describe('longest palindrome test case 🥇', () => {
  it('should return the expected result', () => {
    expect(longestPalindrome('abccccdd')).toBe(7)
  })
})

describe('longest palindrome test case 🥈', () => {
  it('should return the expected result', () => {
    expect(longestPalindrome('a')).toBe(1)
  })
})

describe('longest palindrome test case 🥉', () => {
  it('should return the expected result', () => {
    expect(
      longestPalindrome('civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth'),
    ).toBe(983)
  })
})
