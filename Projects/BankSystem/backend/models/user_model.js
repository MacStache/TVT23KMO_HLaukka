const db = require('../database');
const bcrypt = require('bcryptjs');

const saltRounds=10;
const user={
  getAll: function(callback) {
    return db.query('select * from user', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from user where id=?', [id], callback);
  },
  add: function(user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hashedPassword) {
      return db.query('insert into user (id, password, first_name, last_name, email, admin) values(?,?,?,?,?,?)',
      [
        user.id, 
        hashedPassword, 
        user.first_name, 
        user.last_name, 
        user.email, 
        user.admin
      ], callback);
    });
  },
  delete: function(id, callback) {
    return db.query('delete from user where id=?', [id], callback);
  },
  update: function(id, user, callback) {
    bcrypt.hash(user.password, saltRounds, function(err, hash) {
      return db.query('update user set password=?, first_name=?, last_name=?, email=?, admin=? where id=?',
      [
        hash, 
        user.first_name, 
        user.last_name, 
        user.email, 
        user.admin, 
        id
      ], callback);
    });
  },
  login: function(username, callback) {
    return db.query('SELECT password, admin FROM user where email=?',
    [username], callback);
  }

}
          
module.exports = user;