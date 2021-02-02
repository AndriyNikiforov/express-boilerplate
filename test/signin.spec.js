const { default: axios } = require('axios');
const chai = require('chai');
const chaiHttp = require('chai-http');
// const server = require('../server');

const should = chai.should();

// chai.use(chaiHttp);
// describe('Auth', () => {
//   describe('/POST signin', () => {
//     it('it get jwt token', () => {
//       chai.request(server)
//         .post('/sign/up')
//         .send({
//           email: 'testgm@gmail.com',
//           username: 'testuser',
//           password: '123qqq123',
//           bio: 'Some one text text',
//           tags: ['asd', 'asd', 'sd'],
//         })
//         .end((err, res) => {
//           console.log(res);
//         });
//     });
//   });
// });

const data = async () => {
  await axios.post('http://0.0.0.0:3005/sign/up', {
    email: 'testgm@gmail.com',
    username: 'testuser',
    password: '123qqq123',
    bio: 'Some one text text',
    tags: ['asd', 'asd', 'sd'],
  }).then((item) => console.log(item));
};

console.log('sd');
data();
console.log('qw');
