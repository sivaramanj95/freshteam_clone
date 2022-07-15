import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(){
    let users = [{
      first_name: 'Vamsi',
      last_name: 'Kaja',
      email: 'kajavamsi@gmail.com',
      team: 'Freshteam',
      joiningDate: '2020-07-22'
    }, {
      first_name: 'Koushi',
      last_name: 'R',
      email: 'koushik.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2019-06-24'
    },
    {
      first_name: 'Koushi',
      last_name: 'R',
      email: 'koushik.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2019-06-24'
    },
    {
      first_name: 'Siva',
      last_name: 'Raman',
      email: 'siva.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2022-06-24'
    },
    {
      first_name: 'Kamil',
      last_name: 'm',
      email: 'kamil.m@gmail.com',
      team: 'Freshteam',
      joiningDate: '2019-12-24'
    },
    {
      first_name: 'Bharath',
      last_name: 'P',
      email: 'bharath.p@gmail.com',
      team: 'Freshteam',
      joiningDate: '2017-06-24'
    },
    {
      first_name: 'Guna',
      last_name: 'R',
      email: 'guna.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2020-06-24'
    },
    {
      first_name: 'Siva',
      last_name: 'K',
      email: 'siva.k@gmail.com',
      team: 'Freshteam',
      joiningDate: '2012-06-24'
    },
    {
      first_name: 'Prathees',
      last_name: 'R',
      email: 'prathees.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2010-06-24'
    },
    {
      first_name: 'Ela',
      last_name: 'R',
      email: 'ela.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2010-01-24'
    },
    {
      first_name: 'test',
      last_name: 'user',
      email: 'test.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2021-06-24'
    },
    {
      first_name: 'Sathish',
      last_name: 'R',
      email: 'sathis.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2018-06-24'
    },
    {
      first_name: 'Mathi',
      last_name: 'R',
      email: 'mathi.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2019-07-02'
    },

  ]; // Add more data here
    
    users.forEach((user) => {
     let userRecord = this.store.createRecord('user', user);
      userRecord.save();
    });
  }
});
