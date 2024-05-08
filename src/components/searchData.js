const searchData = [
  {
    id: 0,
    images: [
      require('../components/images/post1.jpg'),
      require('../components/images/profile2.jpg'),
      require('../components/images/post7.jpg'),
      require('../components/images/post8.jpg'),
      require('../components/images/post9.jpg'),
      require('../components/images/post10.jpg'),
    ],
  },
  {
    id: 1,
    images: [
      require('../components/images/post11.jpg'),
      require('../components/images/post10.jpg'),
      require('../components/images/post12.jpg'),
      require('../components/images/post13.jpg'),
      require('../components/images/post14.jpg'),
      require('../components/images/redBoss.jpg'),
    ],
  },
  {
    id: 2,
    images: [
      require('../components/images/post1.jpg'),
      require('../components/images/post1.jpg'),
      require('../components/images/profile4.jpg'),
    ],
  },
  {
    type: 'images',
    images: [require('../components/images/redBoss.jpg'), require('../components/images/redBoss.jpg'), require('../components/images/redBoss.jpg')],
  },
  {
    type: 'users',
    users: [
      { name: 'chillhouse', profilePic: require('../components/images/redBoss.jpg') },
      { name: 'The_Groot', profilePic: require('../components/images/redBoss.jpg') },
    ],
  },
];

export default searchData;
