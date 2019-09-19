module.exports = (sequelize, Sequelize) => {
  return sequelize.define('users', {
    mno: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Doctrue: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    email_id: {
      type: Sequelize.STRING,
      allowNull: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    paswdd: {
      type: Sequelize.STRING,
      allowNull: true
    },
    tel: {
      type: Sequelize.STRING,
      allowNull: true
    },
    gender: {
      type: Sequelize.STRING,
      allowNull: true
    },
  });
}