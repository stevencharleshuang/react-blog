const db = require('../config/connection');

module.exports =  {

    findAll() {
      return db.many(`
        SELECT *
          FROM users
      `);
    },

    findByID(id) {
      return db.one(`
        SELECT *
          FROM users
         WHERE id = $1
      `, id);
    },

    findByUsername(username) {
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
                    name
                    username,
                    email,
                    password,
                    avatar_url
                    )
             VALUES (
                    $/name/,
                    $/username/,
                    $/email/,
                    $/password/,
                    $/avatar_url
                    )
          RETURNING *
      `, user);
    console.log('userDB save(user) says: server-dive sucessful!');
    },

};
