import { describe, expect, it } from 'vitest'
import { findAllRecipes } from '../../code/medium/02115-Find-All-Possible-Recipes-from-Given-Supplies'

describe('find all possible recipes from given supplies test case 🥇', () => {
  it('should return the expected result', () => {
    const recipes = ['bread', 'sandwich']
    const ingredients = [['yeast', 'flour'], ['bread', 'meat']]
    const supplies = ['yeast', 'flour', 'meat']
    const result = findAllRecipes(recipes, ingredients, supplies)
    const expected = ['bread', 'sandwich']
    expect(result).toEqual(expected)
  })
})

describe('find all possible recipes from given supplies test case 🥈', () => {
  it('should return the expected result', () => {
    const recipes = ['bread']
    const ingredients = [['yeast', 'flour']]
    const supplies = ['yeast', 'flour', 'corn']
    const result = findAllRecipes(recipes, ingredients, supplies)
    const expected = ['bread']
    expect(result).toEqual(expected)
  })
})

describe('find all possible recipes from given supplies test case 🥉', () => {
  it('should return the expected result', () => {
    const recipes = ['bread', 'sandwich', 'burger']
    const ingredients = [['yeast', 'flour'], ['bread', 'meat'], ['sandwich', 'meat', 'bread']]
    const supplies = ['yeast', 'flour', 'meat']
    const result = findAllRecipes(recipes, ingredients, supplies)
    const expected = ['bread', 'sandwich', 'burger']
    expect(result).toEqual(expected)
  })
})
