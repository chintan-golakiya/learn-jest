const add = require('../sum')

test('sum of non negative ', async ()=>{
  const res = await add(10,20);
  expect(res).toBe(30);
})

test('sum of non negative ', async ()=>{
  await expect(async () => {
    await add(-10,20)
  }).rejects.toThrow(/^Accepting only non negative numbers$/)
})