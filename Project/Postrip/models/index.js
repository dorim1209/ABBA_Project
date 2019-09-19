const path = require('path');
const Sequelize = require('sequelize');

/* 개발자 환경으로 실행 */
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

/* 객체 */
db.sequelize = sequelize;
/* function */
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.MyPage = require('./mypage')(sequelize, Sequelize);
/* db.Product = require('./product')(sequelize, Sequelize); */

module.exports = db;