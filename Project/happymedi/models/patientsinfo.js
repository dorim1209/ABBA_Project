module.exports = (sequelize, Sequelize) => {
  return sequelize.define('patientsinfo', {
    mno: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tel: {
      type: Sequelize.STRING,
      allowNull: true
    },
    disease: {
      type: Sequelize.STRING,
      allowNull: true
    },
  });
}