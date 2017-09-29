import * as express from 'express';
export let app = express();
const port = 8000;
const baseUrl = `http://localhost:${port}`;
//import * as supertest from 'supertest';

//const request=supertest(app);
app.set('view engine', 'html');
app.set('views', 'src');

app.use('/', express.static('dist', {index: false}));

app.get('/data', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.status(200).send({data:"exito"});
  console.timeEnd(`GET: ${req.originalUrl}`);
});
app.get('/users', (req, res) => {
  console.time(`GET: ${req.originalUrl}`);
  res.status(200).json({data:["a","b","c"]});
});
export var server=app.listen(4040,()=>{
console.log("app inciiada")
})

  
/*
request(app)
.get('/user')
.expect('Content-Type', /json/)
.expect('Content-Length', '15')
.expect(200)
.end(function(err, res) {
  if (err) throw err;
});
*/
