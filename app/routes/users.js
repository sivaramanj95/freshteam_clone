import Route from '@ember/routing/route';


export default Route.extend({
  beforeModel(){
    let users = [{
      first_name: 'Vamsi',
      last_name: 'Kaja',
      email: 'kajavamsi@gmail.com',
      team: 'Freshteam',
      joiningDate: '2020-07-22',
      image_url: "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    }, {
      first_name: 'Koushikk',
      last_name: 'R',
      email: 'koushik.r@gmail.com',
      team: 'Freshteam',
      joiningDate: '2019-06-24',
      image_url: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80"
    },
    {
      first_name: 'Koushi',
      last_name: 'R',
      email: 'koushik.r@gmail.com',
      team: 'Sales',
      joiningDate: '2019-06-24',
      image_url: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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
      joiningDate: '2017-06-24',
      image_url: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
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
      joiningDate: '2012-06-24',
      image_url: "https://images.unsplash.com/photo-1591084728795-1149f32d9866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      first_name: 'Prathees',
      last_name: 'R',
      email: 'prathees.r@gmail.com',
      team: 'Business',
      joiningDate: '2010-06-24',
      image_url: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    {
      first_name: 'Ela',
      last_name: 'R',
      email: 'ela.r@gmail.com',
      team: 'Security',
      joiningDate: '2010-01-24',
      image_url: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1306&q=80"
    },
    {
      first_name: 'test',
      last_name: 'user',
      email: 'test.r@gmail.com',
      team: 'Management',
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
      team: 'Sales',
      joiningDate: '2019-07-02',
      image_url: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    },

  ]; // Add more data here
    
    // users.forEach((user) => {
    //  let userRecord = this.store.createRecord('user', user);
    //   userRecord.save();
    // });
  },

});
