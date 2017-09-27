var request=require('supertest');
import { app } from './../src/main.server';
import { expect,should } from 'chai';


describe('#Numeros', () => {
  
  it('1+1=2', (cb) => {
    expect(2).to.be.eq(2);
    cb()
  });

});


describe('Testeando un endpoint', () => {

  it('COn promise',() => {
    return request(app)
    .get('/data')
    .expect('Content-type',/json/)
    .expect(200)
    .then((data)=>{
      expect("exito").to.be.equals(data.body.data);   
    })
  });


});