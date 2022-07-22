const grepWithShell = require('./grepWithShell');

  it('watches for todos', async () => {
    const result = await grepWithShell('./test.md')
    expect(result).toMatch(/-[ ]/)
  })