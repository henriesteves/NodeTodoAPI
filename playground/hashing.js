const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    });
});

var hashedPassword = '$2a$15$5SJAc7uDukQYXDHS.MdjGON3Rt0LcqsOyMnNXf7MA2Jrz3CUeFTsK';
var hashedPassword2 = '$2a$15$G5i/X89zV8DgYhJFaSRe6Or0FytYE6Tqr7ub4.MPkI/prclgKC1cy';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

bcrypt.compare(password, hashedPassword2, (err, res) => {
    console.log(res);
});


// ############

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log('token:', token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded:', decoded);


// #############

// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };


// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//   console.log('Data was not changed');
// } else {
//   console.log('Data was changed. Do not trust!');
// }
