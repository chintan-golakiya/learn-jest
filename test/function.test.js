const func = require('../function')
test('calculate total tip',()=>{
  const total = func(10,3);
  expect(total).toBe(10.3)
})

test('calculate total tip default 5 %',()=>{
  const total = func(200);
  expect(total).toBe(210);
})

test('test async',(done)=> {
  setTimeout(()=>{
    expect(1).toBe(1)
    done()
  },500 )
})