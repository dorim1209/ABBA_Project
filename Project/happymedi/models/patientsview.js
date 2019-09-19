module.exports = (sequelizeview,Sequelizeview) => {
    const Patientsview = sequelizeview.define('patientsview', {
      email: Sequelizeview.STRING,
      name: Sequelizeview.STRING,
      telnumber: Sequelizeview.STRING,
      disease: Sequelizeview.STRING,
      // etc...
    }, {
      treatAsView: true,
      viewDefinition: `
        create view patientsview as
        select t1.email_id as 'email',
        t1.name as 'name',
        t1.gender as 'gender',
        t2.tel as 'tel',
        t2.disease as 'disease',
        t2.createdAt as 'treatdate',
        from users as t1 inner join patientsinfos as t2
        on (t1.tel = t2.tel);`
    });
  
    return Patientsview;
  };