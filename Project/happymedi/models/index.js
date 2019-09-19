const path = require('path');
const Sequelize = require('sequelize');
//const SequelizeView = require('sequelize-views-support');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname , '..','config','config.json'))[env];
const db = {};

const sequelize= new Sequelize(config.database,config.username, config.password, config);
//const sequelizeview = new SequelizeView(config.database,config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db.sequelizeview = sequelizeview;
// db.Sequelizeview = Sequelizeview;

db.users=require('./users')(sequelize,Sequelize);
db.patientsinfo=require('./patientsinfo')(sequelize,Sequelize);
//db.patientsview=require('./Patientsview')(sequelizeview,Sequelizeview);

module.exports = db;