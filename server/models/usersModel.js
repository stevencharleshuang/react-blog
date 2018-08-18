const db = require('../config/connection');

module.exports =  {

    findAll() {
      return db.many(`
        SELECT *
          FROM users
      `);
    },

    findById(id) {
      return db.one(`
        SELECT *
          FROM users
         WHERE user_id = $1
      `, id);
    },

    findOne(username) {
      return db.one(`
        SELECT *
          FROM users
         WHERE username = $1
      `, username);
    },

    save(user) {
      console.log('userDB says: save(user) = ', user);
      return db.one(`
        INSERT INTO users (
                    fname,
                    lname,
                    username,
                    email,
                    password_digest
                    )
             VALUES (
                    $/fname/,
                    $/lname/,
                    $/username/,
                    $/email/,
                    $/password_digest/
                    )
          RETURNING *
      `, user);
    console.log('userDB save(user) says: server-dive sucessful!');
    },

};
