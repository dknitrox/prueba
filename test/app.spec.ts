
import { app,server } from './../src/main.server';
var request=require('supertest')(app);

import { expect,should } from 'chai';


describe('#Numeros', () => {
  afterEach(function () {
    server.close();
  });
  it('1+1=2', (cb) => {
    expect(2).to.be.eq(2);
    cb()
  });

  describe('#Testeando un endpoint', () => {
    
      it('--- Con promise',() => {
        return request
        .get('/data')
        .expect('Content-type',/json/)
        .expect(200)
        .then((data)=>{
          expect("exito").to.be.equals(data.body.data);   
        })
      });
    
    
    });
});

