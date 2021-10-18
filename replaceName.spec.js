import { describe, expect, it } from '@jest/globals'
import { replaceName } from './replaceName.js'

describe('replaceName', () => {
  it('replaces name in a text', () => {
    const newLocal = 'Hello Jane'
    const name = 'Jane'
    const newName = 'Dolly'
    const result = replaceName(newLocal, name, newName)
    expect(result).toBe('Hello Dolly')
  })

  it('replaces each occurence of name in a text', () => {
    const result = replaceName('Hi John, bye John.', 'John', 'Jane')
    expect(result).toBe('Hi Jane, bye Jane.')
  })
})
