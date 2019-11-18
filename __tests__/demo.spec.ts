import { sum } from './demo'

describe('demo', () => {
  it('test ts sum function ', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
