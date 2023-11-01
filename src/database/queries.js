const {User, db} = await import('./models');
// const {User, db} = await import('./src/database/models.js');

const users = await User.findAll();
console.log(users);

