// const Pet = require('./models/pet');
//
// let now = Date.now();
// Pet.create({
//     id: 'g-' + now,
//     name: 'Gaffey',
//     gender: false,
//     birth: '2007-07-07',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
// }).then(function (p) {
//     console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//     console.log('failed:' + err);
// });
// const async = require('async');
const User = require('./models/user');

// (async () => {
//     await User.create({
//         name: 'ddd',
//         pwd: '21212'
//     });
// })();

(async () => {
    let pets = await User.findAll({
        where: {
            name: 'ddd'
        }
    });
    console.log(`find ${pets.length} pets:`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
    }
})();

// User.create({
//     name: 'ddd',
//     pwd: '21212'
// }).then(function (p) {
//     console.log('created.' + JSON.stringify(p));
// }).catch(function (err) {
//     console.log('failed:' + err);
// });
