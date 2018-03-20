const humanize = require('.')
const input = require('./fixture.json')
const isObject = require('./lib/is-object')

it('is a function', () => {
  expect(typeof humanize).toBe('function')
})

it('returns null if no input is given', () => {
  expect(humanize()).toBeNull()
})

it('flattens edges and nodes into an array', () => {
  const output = humanize(input)
  // console.log(JSON.stringify(output, null, 2))
  expect(isObject(input.data.repository.releases)).toBe(true)
  expect(Array.isArray(output.data.repository.releases)).toBe(true)
})

it('recurses', () => {
  const output = humanize(input)
  expect(isObject(input.data.repository.releases.edges[0].node.releaseAssets)).toBe(true)
  expect(Array.isArray(output.data.repository.releases[0].releaseAssets)).toBe(true)
})
