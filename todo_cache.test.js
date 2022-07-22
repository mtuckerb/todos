const {exists, add} = require('./todo_cache')

it('adds an entry to redis and checks that it exists', async () => {
  await add('test', 'test123')
  const test_exists = await exists('test', 'test123')
  const test_not_exists = await exists('test1', 'test124')
  expect(test_exists).toBe(true)
  expect(test_not_exists).toBe(false)
})