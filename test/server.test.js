const server = require("../server");
const request = require("supertest");


test('Test server is starting',async ()=>{
  await request(server.app).get('/')
  .expect(200)
  .expect({
    message :'Hello to test'
  })

})

test('Test create a todo Item', async ()=> {
  await request(server.app).post('/create')
  .send({
    record:'Test Record'
  })
  .expect(201)
})

let _idofrecordFound = 2;

test('Test get a todo Item', async ()=> {
  await request(server.app).get('/get')
  .expect(200)
  .then(res=>{
    const b = res.body;
    expect(b.length).toEqual(1);
    expect(b[0]).toEqual(expect.objectContaining({
      record: 'Test Record'
    }))
    _idofrecordFound = b[0]._id;
  })
})

test('Test delete record', async() => {
  await request(server.app).post('/delete')
  .send({
    _id:_idofrecordFound
  })
  .expect(200);
  server.closeDbConnection();
})
